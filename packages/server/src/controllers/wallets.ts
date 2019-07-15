import { RequestHandler } from 'express';
import { purchase, tokenizeCard } from '../helpers';

export const createWallet: RequestHandler = async (req, res) => {
	// const { userId, cardNumber, cvv, expiryMonth, expiryYear } = req.body;
	try {
		const wallet = await tokenizeCard(req.body);

		return res.status(201).json({
			success: true,
			message: 'Wallet successfully created',
			wallet
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};

export const verifyWallet: RequestHandler = async (req, res) => {
	// Not sure how this works, does the tokenizeCard function return the accurate amount?
	const { otp } = req.body;
	try {
		// Validate card things with OTP
		console.log(otp);
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message
		});
	}
};

export const purchasePoints: RequestHandler = async (req, res) => {
	const { userId, amount } = req.body;
	try {
		const wallet = await purchase(userId, amount);
		return res.status(200).json({
			success: true,
			message: `${amount} points successfully purchased`,
			wallet
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};
