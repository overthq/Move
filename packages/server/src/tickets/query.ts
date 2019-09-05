import { Ticket } from '../models';

const ticketsQuery = {
	tickets: async (_, { routeId }) => {
		const usersTickets = await Ticket.find({ routeId });
		return usersTickets;
	}
};

export default ticketsQuery;
