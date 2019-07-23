import { model, Schema, Document } from 'mongoose';

export interface WalletType extends Document {
	userId: string;
	cardId: string;
	token: string;
	points: number;
}

const WalletSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		cardId: {
			type: Schema.Types.ObjectId,
			ref: 'CreditCard'
		},
		points: {
			type: Number,
			default: 0 // Maybe bump this if we have a launch bonus
		},
		token: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const Wallet = model<WalletType>('Wallet', WalletSchema);
export default Wallet;
