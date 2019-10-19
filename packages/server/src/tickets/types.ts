const Ticket = `
	type Ticket {
		_id: ID!
		userId: ID!
		route: Route!
		quantity: Int!
		reverse: Boolean!
	}

	input TicketInput {
		userId: ID!
		origin: ID!
		destination: ID!
		quantity: Int
	}

	extend type Query {
		tickets(userId: ID!): [Ticket!]!
	}

	extend type Mutation {
		purchaseTicket(input: TicketInput!): Ticket!
		useTicket(routeId: ID! userId: ID!): Ticket
		sendTicket(ticketId: ID! phoneNumber: String!): Ticket!
	}
`;

export default Ticket;
