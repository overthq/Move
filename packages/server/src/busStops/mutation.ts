import { BusStop } from '../models';

const busStopsMutation = {
	createBusStop: async (_, { input }) => {
		const { name } = input;
		const busStop = await new BusStop({ name }).save();
		return busStop;
	}
};

export default busStopsMutation;
