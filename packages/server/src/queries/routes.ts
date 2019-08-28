import { Route, BusStop } from '../models';

const routeQuery = {
	routes: async () => {
		const allRoutes = await Route.find();
		return allRoutes;
	},
	route: async (_, { id }) => {
		const matchedRoute = await Route.findById(id);
		if (!matchedRoute) throw new Error('Specified trip does not exist');

		const matchedRouteOrigin = await BusStop.findById(matchedRoute.origin);
		const matchedRouteDestination = await BusStop.findById(
			matchedRoute.destination
		);

		if (!matchedRouteOrigin || !matchedRouteDestination) {
			throw new Error('Destination is invalid');
		}

		return Object.assign(matchedRoute, {
			origin: matchedRouteOrigin,
			destination: matchedRouteDestination
		});
	}
};

export default routeQuery;
