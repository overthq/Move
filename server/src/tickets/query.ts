import { Ticket, Route } from '../models';
import { completeRoutes } from '../helpers/loaders';

const ticketsQuery = {
	tickets: async (_, { userId }) => {
		const userTickets = await Ticket.find({ userId });
		const userTicketsWithRoutes = await Promise.all(
			userTickets.map(async ticket => {
				const route = await Route.findById(ticket.routeId);
				const [routeWithBusStops] = await completeRoutes([route]);
				if (ticket.reverse) {
					const newRoute = Object.assign(routeWithBusStops, {
						origin: route.destination,
						destination: route.origin
					});
					return Object.assign(ticket, { route: newRoute });
				}
				return Object.assign(ticket, { route: routeWithBusStops });
			})
		);
		return userTicketsWithRoutes;
	}
};

export default ticketsQuery;
