import { Route } from '../models';

const routesMutation = {
	createRoute: async (_, { input }) => {
		const { origin, destination, fare } = input;
		const route = await Route.create({ origin, destination, fare });
		return route.populate('origin destination').execPopulate();
	}
};

export default routesMutation;
