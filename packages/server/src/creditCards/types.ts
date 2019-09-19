const CreditCard = `
	type CreditCard {
		_id: ID!
		userId: ID!
		cardDigits: String!
		cardBIN: String!
		expiryMonth: String!
		expiryYear: String!
		cardType: String!
		token: String!
	}

	input CreditCardInput {
		userId: ID!
		cardNumber: String!
		cvv: String!
		expiryMonth: String!
		expiryYear: String!
	}

	extend type Query {
		creditCards(userId: ID!): [CreditCard!]!
	}

	extend type Mutation {
		saveCard(input: CreditCardInput!): CreditCard!
	}
`;

export default CreditCard;
