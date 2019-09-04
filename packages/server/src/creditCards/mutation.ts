// import { CreditCard } from '../models';
import { tokenizeCard } from './helpers';

const creditCardMutation = {
	saveCard: async (_, { input }) => {
		const { userId, cardNumber, cvv, expiryMonth, expiryYear } = input;
		const creditCard = await tokenizeCard({
			userId,
			cardNumber,
			cvv,
			expiryMonth,
			expiryYear
		});
		return creditCard;
	}
};

export default creditCardMutation;
