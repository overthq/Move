import { Card } from '../models';

const creditCardsQuery = {
	card: async (_, { userId }) => {
		try {
			const userCard = await Card.findOne({ userId });
			return userCard;
		} catch (error) {
			throw new Error(error.message);
		}
	}
};

export default creditCardsQuery;
