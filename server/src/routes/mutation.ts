import { Route } from '../models';
import { verifyStops } from './helpers';

const routesMutation = {
	createRoute: async (_, { input }) => {
		const { origin, destination, fare } = input;
		const { originBusStop, destinationBusStop } = await verifyStops(
			origin,
			destination
		);

		const trip = await new Route({ origin, destination, fare }).save();
		return Object.assign(trip, {
			origin: originBusStop,
			destination: destinationBusStop
		});
	}
};

export default routesMutation;
