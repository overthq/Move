import fetch from 'node-fetch';
import RavePay, { CardDetails } from 'ravepay';
import { User, CreditCard, CreditCardType } from '../models';

const { RAVE_API_PUBLIC_KEY, RAVE_API_SECRET_KEY } = process.env;
const rave = new RavePay(
	RAVE_API_PUBLIC_KEY,
	RAVE_API_SECRET_KEY,
	process.env.NODE_ENV === 'production'
);

export const purchase = async (userId: string, amount: number) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw new Error(
				'Specified wallet not found. Please make sure you create a wallet first.'
			);
		}

		const creditCard = await CreditCard.findOne({ userId: user.id });
		if (!creditCard) {
			throw new Error('You have not linked your credit card this app.');
		}

		const { firstName, lastName, phoneNumber } = user;

		const response = await fetch(
			'https://api.ravepay.co/flwv3-pug/getpaidx/api/tokenized/charge',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					currency: 'NGN',
					SECKEY: RAVE_API_SECRET_KEY,
					token: creditCard.token,
					country: 'NG',
					amount,
					phonenumber: phoneNumber,
					firstname: firstName,
					lastname: lastName,
					// IP: 'user_ip_address',
					// Do I need to request the user's email because of Rave's constraints?
					txRef: `MC-${Date.now()}`
				})
			}
		);

		const { status, data } = await response.json();
		if (status !== 'success') throw new Error(data.toString());

		console.log(data);
		return `Amount ${amount} has been paid by user ${userId}`;
	} catch (error) {
		throw new Error('Error while making payment: ' + error.message);
	}
};

interface TokenizeCardInfo {
	userId: string;
	cardNumber: string;
	cvv: string;
	expiryMonth: string;
	expiryYear: string;
}

type TokenizeCard = (info: TokenizeCardInfo) => Promise<CreditCardType>;

export const tokenizeCard: TokenizeCard = async ({
	userId,
	cardNumber,
	cvv,
	expiryMonth,
	expiryYear
}) => {
	try {
		const user = await User.findById(userId);
		if (!user) throw new Error('User does not exist');
		const { firstName, lastName, phoneNumber } = user;

		const cardDetails: CardDetails = {
			firstname: firstName,
			lastname: lastName,
			phonenumber: phoneNumber,
			cardno: cardNumber,
			cvv,
			expirymonth: expiryMonth,
			expiryyear: expiryYear,
			amount: '10',
			currency: 'NGN',
			country: 'NG',
			// eslint-disable-next-line
			device_fingerprint: ''
		};

		const body = await rave.TokenCharge.card(cardDetails);
		console.log(body);

		// Does this action not require an OTP?
		const {
			data: { card }
		} = body;
		const { last4digits, expirymonth, expiryyear, cardBIN } = card;
		const [{ embedtoken: token }] = card.card_tokens;

		const creditCard = await CreditCard.create({
			userId,
			cardDigits: last4digits,
			expiryMonth: expirymonth,
			expiryYear: expiryyear,
			cardBIN,
			token
		});

		return creditCard;
	} catch (error) {
		throw new Error('Error while making payment: ' + error.message);
	}
};
