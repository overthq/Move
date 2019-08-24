const Trip = `
	type Trip {
		_id: ID!
		origin: String!
		destination: String!
		fare: Int!
	}

	input TripInput {
		origin: String!
		destination: String!
		fare: Int!
	}

	extend type Mutation {
		createTrip(input: TripInput): Trip
	}

	extend type Query {
		trips: [Trip]
		trip(id: ID!): Trip
	}
`;

export default Trip;
