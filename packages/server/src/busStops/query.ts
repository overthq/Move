import { BusStop, Route, RouteType } from '../models';
import { verifyStops } from '../routes/helpers';

const completeRoutes = async (routes: RouteType[]) => {
	const fullRoutes = await Promise.all(
		routes.map(async ({ origin, destination }) => {
			const { originBusStop, destinationBusStop } = await verifyStops(
				origin,
				destination
			);
			return { origin: originBusStop, destination: destinationBusStop };
		})
	);
	return fullRoutes;
};

const busStopQuery = {
	busStops: async () => {
		const allBusStops = await BusStop.find();
		const allBusStopsWithRoutes = await Promise.all(
			allBusStops.map(async busStop => {
				const routeConditions = [
					{ origin: busStop.id },
					{ destination: busStop.id }
				];
				const routes = await Route.find({ $or: routeConditions });
				const routesWithBusStops = await completeRoutes(routes);
				return Object.assign(busStop, { routes: routesWithBusStops });
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
		const routesWithBusStops = await completeRoutes(routes);
		return Object.assign(matchedBusStop, { routes: routesWithBusStops });
	}
};

export default busStopQuery;
