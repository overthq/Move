import { model, Schema, Document } from 'mongoose';

export interface BusStopType extends Document {
	name: string;
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
