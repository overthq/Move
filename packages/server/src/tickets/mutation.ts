import { Ticket, Route } from '../models';
import { purchase } from '../creditCards/helpers';

const ticketsMutation = {
	purchaseTicket: async (_, { input }) => {
		const { userId, routeId, quantity } = input;
		// Check if the user wants to go on the trip, or the reverse.
		// e.g. Fagba - Agege / Agege - Fagba

		const route = await Route.findById(routeId);
		if (!route) throw new Error('Specified route does not exist');
		const { fare } = route;

		// Make payment of the fare
		await purchase(userId, fare);
		// Make sure that the payment creates an invoice entry with the trip information, date and other details.
		// I'm not sure this is possible because the trip has to be created before the invoice can be created

		const ticket = await Ticket.create({ userId, routeId, quantity });
		return ticket;
	}
};

export default ticketsMutation;
