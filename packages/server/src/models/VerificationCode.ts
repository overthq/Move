// Ideally, in the future, the need for this should be superseded by a Redis cache.
import { model, Schema, Document } from 'mongoose';

export interface VerificationCodeType extends Document {
	phoneNumber: string;
	code: string;
}

const VerificationCodeSchema = new Schema(
	{
		phoneNumber: {
			type: String,
			required: true
		},
		code: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

export const VerificationCode = model<VerificationCodeType>(
	'VerificationCode',
	VerificationCodeSchema
);
