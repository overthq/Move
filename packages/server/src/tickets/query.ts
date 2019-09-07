import { Ticket } from '../models';

const ticketsQuery = {
	tickets: async (_, { userId }) => {
		const usersTickets = await Ticket.find({ userId });
		return usersTickets;
	}
};

export default ticketsQuery;
