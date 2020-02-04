const Card = `
	type Card {
		_id: ID!
		userId: ID!
		cardDigits: String!
		cardBIN: String!
		expiryMonth: String!
		expiryYear: String!
		cardType: String!
		token: String!
	}

	input CardInput {
		userId: ID!
		cardNumber: String!
		cvv: String!
		expiryMonth: String!
		expiryYear: String!
	}

	extend type Query {
		card(userId: ID!): Card!
	}

	extend type Mutation {
		saveCard(input: CardInput!): Card!
	}
`;

export default Card;
