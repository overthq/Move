import { BusStop, Route } from '../models';
import { verifyStops } from '../routes/helpers';

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
				const routesWithBusStops = await Promise.all(
					routes.map(async route => {
						const { originBusStop, destinationBusStop } = await verifyStops(
							route.origin,
							route.destination
						);
						return { origin: originBusStop, destination: destinationBusStop };
					})
				);
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
		return Object.assign(matchedBusStop, { routes });
	}
};

export default busStopQuery;
