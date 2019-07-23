import { model, Schema, Document } from 'mongoose';

interface DriverType extends Document {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

const DriverSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		phoneNumber: {
			type: String,
			required: true,
			unique: true
		},
		licensePlate: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const Driver = model<DriverType>('Driver', DriverSchema);

export default Driver;
