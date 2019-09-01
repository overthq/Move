import { CreditCard } from '../models';

const creditCardMutation = {
	saveCard: async (_, { input }) => {
		const {} = input;
		const creditCard = CreditCard.create({});
		// We have to tokenize the card first
		return creditCard;
	}
};

export default creditCardMutation;
