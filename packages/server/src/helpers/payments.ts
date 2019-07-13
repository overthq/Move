import RavePay, { CardDetails } from 'ravepay';
import { RAVE_API_PUBLIC_KEY, RAVE_API_SECRET_KEY } from '../config/env';
import { User } from '../models';

const rave = new RavePay(
	RAVE_API_PUBLIC_KEY,
	RAVE_API_SECRET_KEY,
	process.env.NODE_ENV === 'production'
);

// This function will receive an object parameter
export const purchase = async (cardDetails: CardDetails) => {
	try {
		// Get the
		await rave.Card.charge(cardDetails);
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

type TokenizeCard = (info: TokenizeCardInfo) => Promise<void>;

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
		return body;
	} catch (error) {
		throw new Error('Error while making payment: ' + error.message);
	}
};
