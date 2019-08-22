import { model, Schema, Document } from 'mongoose';

export interface UserSchema extends Document {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

const UserSchema = new Schema(
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
			required: true
		}
	},
	{ timestamps: true }
);

export const User = model<UserSchema>('User', UserSchema);
