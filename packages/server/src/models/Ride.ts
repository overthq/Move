import { model, Schema, Document } from 'mongoose';

interface RideType extends Document {
	userId: string;
	tripId: string;
}

const RideSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		tripId: {
			type: Schema.Types.ObjectId,
			ref: 'Trip',
			required: true
		}
	},
	{ timestamps: true }
);

// A ride must be issued an invoice or receipt.

const Ride = model<RideType>('Ride', RideSchema);
export default Ride;
