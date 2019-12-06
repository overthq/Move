import { Card } from '../models';

const creditCardsQuery = {
	cards: async (_, { userId }) => {
		const usersCreditCards = await Card.find({ userId });
		return usersCreditCards;
	}
};

export default creditCardsQuery;
