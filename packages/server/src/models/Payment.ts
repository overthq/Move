import { model, Schema, Document } from 'mongoose';
import { WalletType } from './Wallet';

export interface PaymentType extends Document {
	wallet: WalletType;
}

const PaymentSchema = new Schema(
	{
		wallet: {
			type: Schema.Types.ObjectId,
			ref: 'Wallet',
			required: true
		},
		amount: {
			type: Number,
			required: true
		}
	},
	{ timestamps: true }
);

export const Payment = model<PaymentType>('Payment', PaymentSchema);
