import { RequestHandler } from 'express';
import { User, Driver, Trip, Ride } from '../models';

export const createTrip: RequestHandler = async (req, res) => {
	const { driverId, fare, origin, destination } = req.body;
	try {
		// TODO: Validate all inputs
		const driver = await Driver.findById(driverId);
		if (!driver) throw new Error('Specified driver does not exist.');

		const trip = await new Trip({
			driverId,
			fare,
			origin,
			destination
		}).save();

		return res.status(201).json({
			success: true,
			message: 'Trip successfully created',
			trip
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};

export const updateTripStatus: RequestHandler = async (req, res) => {
	const { tripId } = req.query;
	const { status } = req.body;
	try {
		if (!['Boarding', 'En-Route', 'Ended'].includes(status)) {
			throw new Error('Invalid trip status');
		}

		const trip = await Trip.findById(tripId);
		if (!trip) throw new Error('Specified trip does not exist.');
		trip.status = status;
		trip.save();
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};

export const getTrip: RequestHandler = async (req, res) => {
	const { tripId } = req.query;
	try {
		const trip = await Trip.findById(tripId);
		if (!trip) throw new Error('No trip found with the specified id');

		// NOTE: This code is a powder keg. It's too verbose, and MUST be refactored.

		// Find all the passengers
		const rides = await Ride.find({ tripId });

		// Get the array of all the users in that trip
		const passengers = await Promise.all(
			rides.map(({ userId }) => User.findById(userId))
		);

		return res.status(200).json({
			success: true,
			message: `Passengers for trip ${tripId} successfully fetched.`,
			trip: { ...trip, passengers }
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};

export const joinTrip: RequestHandler = async (req, res) => {
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

export const listAllTrips: RequestHandler = async (req, res) => {
	try {
		const trips = await Trip.find();
		return res.status(200).json({
			success: true,
			message: 'Fetched list of trips',
			trips
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message
		});
	}
};
