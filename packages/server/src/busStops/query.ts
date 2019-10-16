import { BusStop } from '../models';
import { routesLoader, busStopsLoader } from '../helpers/loaders';

const busStopQuery = {
	busStops: async () => {
		const allBusStops = await BusStop.find().populate('routes');
		const allBusStopsWithRoutes = await Promise.all(
			allBusStops.map(async busStop => {
				const routeConditions = [
					{ origin: busStop.id },
					{ destination: busStop.id }
				];
				const routes = await routesLoader.load(routeConditions);
				return Object.assign(busStop, { routes });
			})
		);
		return allBusStopsWithRoutes;
	},
	busStop: async (_, { id }) => {
		const matchedBusStop = await busStopsLoader.load(id);
		return matchedBusStop;
	}
};

export default busStopQuery;
