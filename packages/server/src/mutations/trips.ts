import { Trip } from '../models';

const tripsMutation = {
	createTrip: async (_, { input }) => {
		const { origin, destination } = input;
		const trip = await new Trip({ origin, destination }).save();
		return trip;
	}
};

export default tripsMutation;
