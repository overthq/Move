import { tokenizeCard } from './helpers';

const creditCardMutation = {
	saveCard: async (_, { input }) => {
		const { userId, cardNumber, cvv, expiryMonth, expiryYear } = input;
		const card = await tokenizeCard({
			userId,
			cardNumber,
			cvv,
			expiryMonth,
			expiryYear
		});
		return card;
	}
};

export default creditCardMutation;
