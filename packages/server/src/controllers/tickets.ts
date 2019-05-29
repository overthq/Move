import { RequestHandler } from 'express';
import { Ticket } from '../models';

// NOTE: This is a placeholder function,
// And will change when the structure of the ticketing system is finally decided.
export const createTicket: RequestHandler = async (req, res) => {
	const { zone, expiry } = req.body;
	try {
		const ticket = new Ticket({ zone, expiry });
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
	const {} = req.body;
	try {
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: 'An error occured while trying to purchase this ticket'
		});
	}
};
