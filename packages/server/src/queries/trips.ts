import { Trip, BusStop } from '../models';

const tripQuery = {
	trips: async () => {
		const allTrips = await Trip.find();
		return allTrips;
	},
	trip: async (_, { id }) => {
		const matchedTrip = await Trip.findById(id);
		if (!matchedTrip) throw new Error('Specified trip does not exist');
		const matchedTripOrigin = await BusStop.findById(matchedTrip.origin);
		if (!matchedTripOrigin) throw new Error('Origin is invalid');
		const matchedTripDestination = await BusStop.findById(
			matchedTrip.destination
		);
		if (!matchedTripDestination) throw new Error('Destination is invalid');
		return matchedTrip;
	}
};

export default tripQuery;
