import { Route } from '../models';
import { verifyStops } from './helpers';

const routeQuery = {
	routes: async () => {
		const allRoutes = await Route.find();
		return allRoutes;
	},
	route: async (_, { id }) => {
		const matchedRoute = await Route.findById(id);
		if (!matchedRoute) throw new Error('Specified trip does not exist');

		const { origin, destination } = matchedRoute;
		const { originBusStop, destinationBusStop } = await verifyStops(
			origin as string,
			destination
		);

		return Object.assign(matchedRoute, {
			origin: originBusStop,
			destination: destinationBusStop
		});
	}
};

export default routeQuery;
