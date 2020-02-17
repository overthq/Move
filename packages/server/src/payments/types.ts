const Payment = `
	type Payment {
		_id: ID!
		wallet: Wallet!
		route: Route!
	}

	input PaymentInput {
		userId: ID!
		routeId: ID!
	}

	extend type Mutation {
		makePayment(input: PaymentInput): Payment!
	}

	extend type Query {
		payments(userId: ID!): [Payment!]!
	}
`;

export default Payment;
