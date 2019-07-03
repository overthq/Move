import { RequestHandler } from 'express';
import { User } from '../models';

export const purchasePoints: RequestHandler = async (req, res) => {
	const { userId, amount } = req.body;
	try {
		return res.status(200).json({
			success: true,
			message: `${amount} points purchased by user ${userId}`
		});
	} catch (error) {}
};

export const getUserPoints: RequestHandler = async (req, res) => {
	const { userId } = req.query;
	try {
		// Get the points based on userId
		return res.status(200).json({
			success: true,
			message: 'User points fetched.'
		});
	} catch (error) {}
};
