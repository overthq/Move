import { RequestHandler } from 'express';
import { Ride, Trip, Wallet } from '../models';
import { purchase } from '../helpers';

export const newRide: RequestHandler = async (req, res) => {
	const { tripId } = req.query;
	const { userId } = req.body;
	try {
		const ride = await new Ride({ userId, tripId }).save();

		const trip = await Trip.findById(tripId);
		if (!trip) throw new Error('Specified trip does not exist.');

		const wallet = await Wallet.findOne({ userId });
		if (!wallet) return;
		// On the frontend, show the user that they MUST create a wallet,
		// or redirect them to the wallet creation page.

		// Carry out the purchase with Rave
		await purchase(userId, trip.fare);

		if (wallet.points < trip.fare) {
			throw new Error(
				'You do not possess the required number of points to pay for this trip'
			);
		}

		wallet.points -= trip.fare;
		await wallet.save();

		return res.status(201).json({
			success: true,
			message: 'Ride joined',
			ride
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};

export const listUserRides: RequestHandler = async (req, res) => {
	const { userId } = req.params;
	try {
		const rides = await Ride.find({ userId });
		return res.status(200).json({
			success: true,
			message: `Previous rides for user ${userId} fetched successfully`,
			rides
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};
