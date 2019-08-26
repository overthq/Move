import { Trip } from '../models';

const tripQuery = {
	trips: async () => {
		const allTrips = await Trip.find();
		return allTrips;
	},
	trip: async (_, { id }) => {
		const matchedTrip = await Trip.findById(id);
		if (!matchedTrip) throw new Error('Specified trip does not exist');
		return matchedTrip;
	}
};

export default tripQuery;
