import { model, Schema, Document } from 'mongoose';

interface CodeType extends Document {
	phoneNumber: string;
	code: string;
}

const CodeSchema = new Schema(
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

const Code = model<CodeType>('Code', CodeSchema);
export default Code;
