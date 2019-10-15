import DataLoader from 'dataloader';
import { BusStop, Route } from '../models';

export const routesLoader = new DataLoader(async routeConditions => {
	const routes = routeConditions.map(async routeCondition => {
		const matchedRoutes = await Route.find({ $or: routeCondition })
			.populate('origin')
			.populate('destination');
		return matchedRoutes;
	});
	return routes;
});

export const busStopsLoader = new DataLoader(async ids => {
	const busStops = await BusStop.find({ _id: { $in: ids } });
	const busStopsWithRoutes = await Promise.all(
		busStops.map(async busStop => {
			if (!busStop) throw new Error('Specified bus stop not found');
			const routes = await routesLoader.load([
				{ origin: busStop.id },
				{ destination: busStop.id }
			]);
			return Object.assign(busStop, { routes });
		})
	);
	return busStopsWithRoutes;
});
