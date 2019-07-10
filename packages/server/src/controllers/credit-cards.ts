import { RequestHandler } from 'express';
import RavePay, { CardDetails } from 'ravepay';
import { User } from '../models';
import CreditCard from '../models/CreditCard';
import { RAVE_API_PUBLIC_KEY, RAVE_API_SECRET_KEY } from '../config/env';
import console = require('console');

const rave = new RavePay(
	RAVE_API_PUBLIC_KEY,
	RAVE_API_SECRET_KEY,
	process.env.NODE_ENV === 'production'
);

export const saveCard: RequestHandler = async (req, res) => {
	const { userId, cardNumber, cvv, expiryMonth, expiryYear } = req.body;
	try {
		const user = await User.findOne({ _id: userId });

		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'Specified user does not exist.'
			});
		}

		const { firstName, lastName, phoneNumber } = user;
		// Tokenize the card with Rave. Not sure what the response looks like yet.
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

		const { body } = await rave.TokenCharge.card(cardDetails);
		console.log(body);
		// Save the user's credit card information based on tokenization's response

		// This is definitely rubbish lol
		const creditCard = new CreditCard(body);
		await creditCard.save();

		return res.status(200).json({
			success: true,
			creditCard
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'An error has occured'
		});
	}
};

export const chargeCard: RequestHandler = async (req, res) => {
	const { userId, cardId } = req.body;
	try {
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: '',
			error
		});
	}
};
