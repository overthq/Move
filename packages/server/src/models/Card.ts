import { model, Schema, Document } from 'mongoose';

enum CardEnum {
	VISA = 'Visa',
	MASTERCARD = 'MasterCard'
}

export interface CardType extends Document {
	userId: string;
	cardDigits: string;
	cardBIN: string;
	expiryMonth: string;
	expiryYear: string;
	cardType: CardEnum;
	token: string;
}

const CardSchema = new Schema(
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
			enum: Object.values(CardEnum),
			default: 'MasterCard'
		},
		token: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

export const Card = model<CardType>('Card', CardSchema);
