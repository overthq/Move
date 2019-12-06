import { Card } from '../models';

const creditCardsQuery = {
	creditCards: async (_, { userId }) => {
		const usersCreditCards = await Card.find({ userId });
		return usersCreditCards;
	}
};

export default creditCardsQuery;
