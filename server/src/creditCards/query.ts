import { CreditCard } from '../models';

const creditCardsQuery = {
	creditCards: async (_, { userId }) => {
		const usersCreditCards = await CreditCard.find({ userId });
		return usersCreditCards;
	}
};

export default creditCardsQuery;
