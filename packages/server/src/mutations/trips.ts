import { Trip } from '../models';

const tripsMutation = {
	createTrip: async (_, { input }) => {
		const { origin, destination, fare } = input;
		const trip = await new Trip({ origin, destination, fare }).save();
		return trip;
	}
};

export default tripsMutation;
