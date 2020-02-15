import { model, Schema, Document } from 'mongoose';
import { UserType } from './User';

// How do we store the required card information?
export interface WalletType extends Document {
	user: UserType;
	value: number;
}

const WalletSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		unique: true
	},
	value: {
		type: Number,
		default: 0
	}
});

export const Wallet = model<WalletType>('Wallet', WalletSchema);
