import { Route } from '../models';

const routeQuery = {
	routes: async () => {
		const allRoutes = await Route.find().populate('origin destination');
		return allRoutes;
	},
	route: async (_, { id }) => {
		const matchedRoute = await Route.findById(id).populate(
			'origin destination'
		);
		if (!matchedRoute) throw new Error('Specified route does not exist.');
		return matchedRoute;
	}
};

export default routeQuery;
