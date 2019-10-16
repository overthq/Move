import { Route } from '../models';

const routesMutation = {
	createRoute: async (_, { input }) => {
		const { origin, destination, fare } = input;
		const route = await new Route({ origin, destination, fare }).save();
		return route.populate('origin').populate('destination');
	}
};

export default routesMutation;
