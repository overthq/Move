import { model, Schema, Document } from 'mongoose';
import { RouteType } from './Route';

export interface BusStopType extends Document {
	name: string;
	routes: RouteType[];
}

const BusStopSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

export const BusStop = model<BusStopType>('BusStop', BusStopSchema);
