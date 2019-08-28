import { BusStop } from '../models';

const busStopQuery = {
	busStops: async () => {
		const allBusStops = await BusStop.find();
		return allBusStops;
	},
	busStop: async (_, { id }) => {
		const matchedBusStop = await BusStop.findById(id);
		if (!matchedBusStop) throw new Error('Specified bus stop not found');
		return matchedBusStop;
	}
};

export default busStopQuery;
