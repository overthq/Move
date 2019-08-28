import { BusStop, Route } from '../models';

const busStopQuery = {
	busStops: async () => {
		const allBusStops = await BusStop.find();
		const allBusStopsWithRoutes = await Promise.all(
			allBusStops.map(async busStop => {
				const routeConditions = [
					{ origin: busStop.id },
					{ destination: busStop.id }
				];
				busStop.routes = await Route.find({ $or: routeConditions });
				return busStop;
			})
		);
		return allBusStopsWithRoutes;
	},
	busStop: async (_, { id }) => {
		const matchedBusStop = await BusStop.findById(id);
		if (!matchedBusStop) throw new Error('Specified bus stop not found');
		const routeConditions = [
			{ origin: matchedBusStop.id },
			{ destination: matchedBusStop.id }
		];
		const routes = await Route.find({ $or: routeConditions });
		return Object.assign(matchedBusStop, { routes });
	}
};

export default busStopQuery;
