import { model, Schema, Document } from 'mongoose';

export interface TripType extends Document {
	origin: string;
	destination: string;
	fare: number;
}

const TripSchema = new Schema(
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

export const Trip = model<TripType>('Trip', TripSchema);
