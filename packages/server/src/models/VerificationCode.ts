import { model, Schema, Document } from 'mongoose';

interface VerificationCodeType extends Document {
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

const VerificationCode = model<VerificationCodeType>(
	'VerificationCode',
	VerificationCodeSchema
);
export default VerificationCode;
