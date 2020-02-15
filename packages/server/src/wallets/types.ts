const Wallet = `
	type Wallet {
		_id: ID!
		user: User!
		value: Int!
	}

	extend type Query {
		wallet(userId: ID!): Wallet!
	}

	extend type Mutation {
		createWallet(userId: ID!): Wallet!
	}
`;

export default Wallet;
