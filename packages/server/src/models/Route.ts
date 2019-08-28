import { model, Schema, Document } from 'mongoose';

export interface RouteType extends Document {
	origin: string;
	destination: string;
	fare: number;
}

const RouteSchema = new Schema(
	{
		origin: {
			type: Schema.Types.ObjectId,
			ref: 'BusStop',
			required: true
		},
		destination: {
			type: Schema.Types.ObjectId,
			ref: 'BusStop',
			required: true
		},
		fare: {
			type: Number,
			required: true
		}
	},
	{ timestamps: true }
);

export const Route = model<RouteType>('Route', RouteSchema);

