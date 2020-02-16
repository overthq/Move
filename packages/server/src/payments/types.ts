const Payment = `
	type Payment {
		_id: ID!
		wallet: Wallet!
		amount: Int!
	}

	extend type Mutation {
		makePayment(walletId: ID!): Payment!
	}

	extend type Query {
		walletPayments(walletId: ID!): [Payment!]!
	}
`;

export default Payment;
