import { RequestHandler } from 'express';
import { Ride, Trip } from '../models';

export const newRide: RequestHandler = async (req, res) => {
	const { tripId } = req.query;
	const { userId } = req.body;
	try {
		const ride = await new Ride({ userId, tripId }).save();

		const trip = await Trip.findById(tripId);
		if (!trip) throw new Error('Specified trip does not exist.');
		console.log(trip.fare);
		// TODO: Find the user and remove the credits of the trip from their wallet

		// TODO: Add payment stuff (Not that fast)

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
