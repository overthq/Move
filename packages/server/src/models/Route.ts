import { model, Schema, Document } from 'mongoose';
import { BusStopType } from './BusStop';

export interface RouteType extends Document {
	origin: BusStopType;
	destination: BusStopType;
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
