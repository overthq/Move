import fetch from 'node-fetch';
import RavePay, { CardDetails } from 'ravepay';
import { RAVE_API_PUBLIC_KEY, RAVE_API_SECRET_KEY } from '../config/env';
import { User, Wallet, CreditCard } from '../models';
import { WalletType } from '../models/Wallet';

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

		const wallet = await Wallet.findOne({ userId });
		if (!wallet) {
			throw new Error(
				'Specified wallet not found. Please make sure you create a wallet first.'
			);
		}

		// Exchange rate for points?
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
					token: wallet.token,
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
		wallet.points += amount;
		wallet.save();
		return wallet;
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

type TokenizeCard = (info: TokenizeCardInfo) => Promise<WalletType>;

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

		// Initialize the user's wallet with this information.
		const {
			data: { card }
		} = body;
		const { last4digits, expirymonth, expiryyear, cardBIN } = card;
		const token = card.card_tokens[0].embedtoken;

		const creditCard = await new CreditCard({
			userId,
			cardDigits: last4digits,
			expiryMonth: expirymonth,
			expiryYear: expiryyear,
			cardBIN
		}).save();

		const wallet = await new Wallet({
			userId,
			cardId: creditCard.id,
			token
		}).save();

		return wallet;
	} catch (error) {
		throw new Error('Error while making payment: ' + error.message);
	}
};
