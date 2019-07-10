import { model, Schema, Document } from 'mongoose';

enum CreditCardEnum {
	VISA = 'Visa',
	MASTERCARD = 'MasterCard'
}

interface CreditCardType extends Document {
	cardDigits: string;
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
		cardType: {
			type: String,
			enum: Object.values(CreditCardEnum)
		}
	},
	{ timestamps: true }
);

const CreditCard = model<CreditCardType>('CreditCard', CreditCardSchema);
export default CreditCard;
