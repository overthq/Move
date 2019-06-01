import { model, Schema, Document } from 'mongoose';

interface TicketType extends Document {
	zone: string;
	price: string;
}

const TicketSchema = new Schema({
	zone: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	}
});

const Ticket = model<TicketType>('Ticket', TicketSchema);
export default Ticket;
