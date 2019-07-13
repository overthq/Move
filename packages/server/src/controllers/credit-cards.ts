import { RequestHandler } from 'express';
import { CreditCard } from '../models';
import { tokenizeCard } from '../helpers';

export const saveCard: RequestHandler = async (req, res) => {
	// const { userId, cardNumber, cvv, expiryMonth, expiryYear } = req.body;
	try {
		const body = await tokenizeCard(req.body);
		// Save the user's credit card information based on tokenization's response

		// This is definitely rubbish lol
		// Get the most important part of the response, the authorization key.
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
