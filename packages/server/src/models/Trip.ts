import { model, Schema, Document } from 'mongoose';

interface TripType extends Document {
	driverId: string;
	fare: number;
	status: 'Boarding' | 'Progress' | 'Ended';
	origin: string;
	destination: string;
}

const TripSchema = new Schema(
	{
		driverId: {
			type: Schema.Types.ObjectId,
			ref: 'Driver'
		},
		fare: {
			type: Number,
			required: true
		},
		status: {
			type: String,
			enum: ['Boarding', 'Progress', 'Ended'],
			default: 'Boarding'
		},
		origin: {
			type: String,
			required: true
		},
		destination: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const Trip = model<TripType>('Trip', TripSchema);
export default Trip;
