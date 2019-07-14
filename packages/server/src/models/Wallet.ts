import { model, Schema, Document } from 'mongoose';

interface WalletType extends Document {
	userId: string;
	points: number;
}

const WalletSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		points: {
			type: Number,
			default: 0 // Maybe bump this if we have a launch bonus
		}
	},
	{ timestamps: true }
);

const Wallet = model<WalletType>('Wallet', WalletSchema);
export default Wallet;
