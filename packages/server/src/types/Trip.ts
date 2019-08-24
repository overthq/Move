const Trip = `
	type Trip {
		origin: String!
		description: String!
		fare: Int!
	}

	input type TripInput {
		origin: String!
		description: String!
		fare: Int!
	}

	extends type Mutation {
		createTrip(input: TripInput): Trip
	}

	extends type Query {
		trips: [Trip]
		trip(id: ID!): Trip
	}
`;

export default Trip;
