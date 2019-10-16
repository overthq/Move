import { Ticket } from '../models';

const ticketsQuery = {
	tickets: async (_, { userId }) => {
		const userTickets = await Ticket.find({ userId }).populate({
			path: 'route',
			populate: [{ path: 'origin' }, { path: 'destination' }]
		});
		return userTickets;
	}
};

export default ticketsQuery;
