import { User, Ticket, Route } from '../models';
// import { purchase } from '../creditCards/helpers';

const ticketsMutation = {
	purchaseTicket: async (_, { input }) => {
		const { userId, origin, destination, quantity } = input;

		const route = await Route.findOne({
			$or: [
				{ origin, destination },
				{ origin: destination, destination: origin }
			]
		}).populate('origin destination');
		if (!route) throw new Error('This route does not exist');

		// const { fare } = route;
		// await purchase(userId, fare);

		const reverse =
			route.origin.id === destination && route.destination.id === origin;

		const userTicket = await Ticket.findOne({
			userId,
			route: route.id,
			reverse
		});

		if (userTicket) {
			userTicket.quantity += quantity;
			userTicket.save();
			return userTicket
				.populate({
					path: 'route',
					populate: { path: 'origin destination' }
				})
				.execPopulate();
		}

		const ticket = await Ticket.create({
			userId,
			route: route.id,
			quantity,
			reverse
		});

		return ticket
			.populate({
				path: 'route',
				populate: { path: 'origin destination' }
			})
			.execPopulate();
	},
	useTicket: async (_, { userId, routeId }) => {
		const ticket = await Ticket.findOne({
			userId,
			route: routeId
		}).populate({
			path: 'route',
			populate: { path: 'origin destination' }
		});
		if (!ticket) throw new Error('The ticket does not exist.');
		if (ticket.quantity > 1) {
			ticket.quantity--;
			await ticket.save();
			return ticket;
		}
		await ticket.remove();
		return null;
	},
	sendTicket: async (_, { ticketId, phoneNumber }) => {
		const ticket = await Ticket.findById(ticketId);
		if (!ticket) throw new Error('The ticket does not exist.');

		const receiver = await User.findOne({ phoneNumber });
		if (!receiver) throw new Error('The user does not exist.');

		ticket.userId = receiver.id;
		ticket.save();
		return ticket
			.populate({ path: 'route', populate: { path: 'origin destination' } })
			.execPopulate();
	}
};

export default ticketsMutation;
