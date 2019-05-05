import { model, Schema, Document } from 'mongoose';

interface CodeType extends Document {
	email: string;
	code: string;
}

const CodeSchema = new Schema(
	{
		email: {
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
