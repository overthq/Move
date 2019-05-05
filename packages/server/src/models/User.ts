import { model, Schema, Document } from 'mongoose';

interface UserType extends Document {
	firstName: string;
	lastName: string;
	email: string;
	verified: boolean;
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
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		verified: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

const User = model<UserType>('User', UserSchema);
export default User;
