import { Ticket, Route } from '../models';
// import { purchase } from '../creditCards/helpers';

const ticketsMutation = {
	purchaseTicket: async (_, { input }) => {
		const { userId, origin, destination, quantity } = input;

		const route = await Route.findOne({
			$or: [
				{ origin, destination },
				{ origin: destination, destination: origin }
			]
		});
		if (!route) throw new Error('This route does not exist');
		// const { fare } = route;
		// Make payment of the fare
		// await purchase(userId, fare);
		const reverse = route.origin.id === destination;

		const ticket = await Ticket.create({
			userId,
			route: route.id,
			quantity,
			reverse
		});

		return ticket.populate({
			path: 'route',
			populate: [{ path: 'origin' }, { path: 'destination' }]
		});
	},
	useTicket: async (_, { userId, routeId }) => {
		const ticket = await Ticket.findOne({
			userId,
			route: routeId
		}).populate({
			path: 'route',
			populate: [{ path: 'origin' }, { path: 'destination' }]
		});
		if (!ticket) throw new Error('The ticket does not exist.');
		if (ticket.quantity > 1) {
			ticket.quantity--;
			await ticket.save();
			return ticket;
		}
		await ticket.remove();
		return null;
	}
};

export default ticketsMutation;
