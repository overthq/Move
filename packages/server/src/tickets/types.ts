const Ticket = `
	type Ticket {
		userId: ID!
		route: Route!
		quantity: Int!
	}

	input TicketInput {
		userId: ID!
		routeId: ID!
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
