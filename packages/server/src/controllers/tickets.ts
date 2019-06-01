import { RequestHandler } from 'express';
import { Ticket } from '../models';

// NOTE: This is a placeholder function,
// And will change when the structure of the ticketing system is finally decided.
export const createTicket: RequestHandler = async (req, res) => {
	const { zone, expiryDate, price } = req.body;
	try {
		const ticket = new Ticket({ zone, expiryDate, price });
		await ticket.save();

		return res.status(201).json({
			success: true,
			message: 'Ticket successfully created',
			ticket
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'An error occured while trying to create this ticket'
		});
	}
};

export const purchaseTicket: RequestHandler = async (req, res) => {
	const { ticketId } = req.body;
	try {
		const ticket = await Ticket.findById(ticketId);
		return res.status(201).json({
			success: true,
			message: 'Ticket successfully purchased',
			ticket
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'An error occured while trying to purchase this ticket'
		});
	}
};
