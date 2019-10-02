import { Route } from '../models';

const routeQuery = {
	routes: async () => {
		const allRoutes = await Route.find()
			.populate('origin')
			.populate('destination');
		return allRoutes;
	},
	route: async (_, { id }) => {
		const matchedRoute = await Route.findById(id)
			.populate('origin')
			.populate('destination');
		return matchedRoute;
	}
};

export default routeQuery;
