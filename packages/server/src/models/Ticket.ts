import { model, Schema, Document } from 'mongoose';

export interface TicketType extends Document {
	userId: string;
	routeId: string;
	quantity: number;
}

const TicketSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		routeId: {
			type: Schema.Types.ObjectId,
			ref: 'Route',
			required: true
		},
		quantity: {
			type: Number,
			required: true,
			default: 1
		}
	},
	{ timestamps: true }
);

export const Ticket = model<TicketType>('Ticket', TicketSchema);
