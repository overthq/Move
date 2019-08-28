import { Route, BusStop } from '../models';

const routesMutation = {
	createRoute: async (_, { input }) => {
		const { origin, destination, fare } = input;

		const originBusStop = await BusStop.findById(origin);
		const destinationBusStop = await BusStop.findById(destination);

		if (!originBusStop || !destinationBusStop) {
			throw new Error('Origin or destination bus stop is invalid');
		}

		const trip = await new Route({ origin, destination, fare }).save();
		return Object.assign(trip, {
			origin: originBusStop,
			destination: destinationBusStop
		});
	}
};

export default routesMutation;

