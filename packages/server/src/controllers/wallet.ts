import { RequestHandler } from 'express';
import { Wallet } from '../models';

export const createWallet: RequestHandler = async (req, res) => {
	const { userId } = req.body;
	try {
		const wallet = new Wallet({ userId });
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

export const purchasePoints: RequestHandler = async () => {
	try {
	} catch (error) {}
};
