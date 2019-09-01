import { model, Schema, Document } from 'mongoose';

enum CreditCardEnum {
	VISA = 'Visa',
	MASTERCARD = 'MasterCard'
}

interface CreditCardType extends Document {
	userId: string;
	cardDigits: string;
	cardBIN: string;
	expiryMonth: string;
	expiryYear: string;
	cardType: CreditCardEnum;
}

const CreditCardSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
		},
		cardDigits: {
			type: String,
			required: true
		},
		cardBIN: {
			type: String,
			required: true
		},
		expiryMonth: {
			type: String,
			required: true
		},
		expiryYear: {
			type: String,
			required: true
		},
		cardType: {
			type: String,
			enum: Object.values(CreditCardEnum),
			default: 'MasterCard'
		}
	},
	{ timestamps: true }
);

export const CreditCard = model<CreditCardType>('CreditCard', CreditCardSchema);
