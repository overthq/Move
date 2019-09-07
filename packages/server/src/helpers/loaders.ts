import DataLoader from 'dataloader';
import { BusStop, Route, RouteType } from '../models';
import { verifyStops } from '../routes/helpers';

export const routesLoader = new DataLoader(async routeConditions => {
	const routes = await routeConditions.map(async routeCondition => {
		const routes = await Route.find({ $or: routeCondition });
		const routesWithBusStops = await completeRoutes(routes);
		return routesWithBusStops;
	});
	return routes;
});

export const busStopsLoader = new DataLoader(async ids => {
	const busStops = await BusStop.find({ _id: { $in: ids } });
	const busStopsWithRoutes = await Promise.all(
		busStops.map(async busStop => {
			if (!busStop) throw new Error('Specified bus stop not found');
			const routeConditions = [
				{ origin: busStop.id },
				{ destination: busStop.id }
			];
			const routes = await routesLoader.load(routeConditions);
			return Object.assign(busStop, { routes });
		})
	);
	return busStopsWithRoutes;
});

export const completeRoutes = async (
	routes: RouteType[]
): Promise<RouteType[]> => {
	const fullRoutes = await Promise.all(
		routes.map(async route => {
			const { originBusStop, destinationBusStop } = await verifyStops(
				route.origin,
				route.destination
			);
			return Object.assign(route, {
				origin: originBusStop,
				destination: destinationBusStop
			});
		})
	);
	return fullRoutes;
};
