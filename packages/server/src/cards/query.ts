import { Card } from '../models';

const creditCardsQuery = {
	cards: async (_, { userId }) => {
		try {
			const usersCards = await Card.find({ userId });
			return usersCards;
		} catch (error) {
			throw new Error(error.message);
		}
	}
};

export default creditCardsQuery;
