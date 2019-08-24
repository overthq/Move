import { model, Schema, Document } from 'mongoose';

export interface TripType extends Document {
	origin: string;
	destination: string;
}

const TripSchema = new Schema(
	{
		origin: {
			type: String,
			required: true
		},
		destination: {
			type: String,
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
