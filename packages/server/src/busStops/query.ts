import { BusStop, Route } from '../models';

const busStopQuery = {
	busStops: async () => {
		const allBusStops = await BusStop.find();
		// DISCLAIMER: This is a very expensive operation.
		// This should be something that should be done on the database end without duplicating data.
		// Option 1: Store references to the routes in an array on the busStop object.
		const allBusStopsWithRoutes = await Promise.all(
			allBusStops.map(async busStop => {
				const routes = await Route.find({
					$or: [{ origin: busStop.id }, { destination: busStop.id }]
				}).populate('origin destination');
				return Object.assign(busStop, { routes });
			})
		);
		return allBusStopsWithRoutes;
	},
	busStop: async (_, { id }) => {
		const matchedBusStop = await BusStop.findById(id);
		const routes = await Route.find({
			$or: [{ origin: matchedBusStop.id }, { destination: matchedBusStop.id }]
		}).populate('origin destination');
		return Object.assign(matchedBusStop, { routes });
	}
};

export default busStopQuery;
