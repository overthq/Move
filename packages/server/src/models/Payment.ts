import { model, Schema, Document } from 'mongoose';
import { WalletType } from './Wallet';
import { RouteType } from './Route';

export interface PaymentType extends Document {
	wallet: WalletType;
	route: RouteType;
}

const PaymentSchema = new Schema(
	{
		wallet: {
			type: Schema.Types.ObjectId,
			ref: 'Wallet',
			required: true
		},
		route: {
			type: Schema.Types.ObjectId,
			ref: 'Route',
			required: true
		}
	},
	{ timestamps: true }
);

export const Payment = model<PaymentType>('Payment', PaymentSchema);
