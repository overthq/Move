import { BusStop } from '../models';

const busStopsMutation = {
	createBusStop: async (_, { input }) => {
		const { name } = input;
		const busStop = await BusStop.create({ name });
		return busStop;
	}
};

export default busStopsMutation;
