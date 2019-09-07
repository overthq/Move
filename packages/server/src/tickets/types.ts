const Ticket = `
	type Ticket {
		_id: ID!
		userId: ID!
		route: Route!
		quantity: Int!
	}

	input TicketInput {
		userId: ID!
		origin: ID!
		destination: ID!
		quantity: Int!
	}

	extend type Query {
		tickets(userId: ID!): [Ticket!]!
	}

	extend type Mutation {
		purchaseTicket(input: TicketInput!): Ticket!
	}
`;

export default Ticket;
