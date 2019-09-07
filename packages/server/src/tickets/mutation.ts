import { Ticket } from '../models';
import { purchase } from '../creditCards/helpers';
import { routesLoader } from '../helpers/loaders';

const ticketsMutation = {
	purchaseTicket: async (_, { input }) => {
		const { userId, origin, destination, quantity } = input;

		const routeConditions = [
			{ origin, destination },
			{ origin: destination, destination: origin }
		];
		const [route] = await routesLoader.load(routeConditions);
		const { fare } = route;
		// Make payment of the fare
		// await purchase(userId, fare);
		const reverse =
			typeof route.origin !== 'string' && route.origin.id === destination;

		const ticket = await Ticket.create({
			userId,
			routeId: route.id,
			quantity,
			reverse
		});
		if (reverse) {
			const newRoute = Object.assign(route, {
				origin: route.destination,
				destination: route.origin
			});
			return Object.assign(ticket, { route: newRoute });
		}
		return Object.assign(ticket, { route });
	}
};

export default ticketsMutation;
