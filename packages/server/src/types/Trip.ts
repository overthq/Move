const Trip = `
	type Trip {
		_id: ID!
		origin: BusStop!
		destination: BusStop!
		fare: Int!
	}

	input TripInput {
		origin: ID!
		destination: ID!
		fare: Int!
	}

	extend type Mutation {
		createTrip(input: TripInput): Trip!
	}

	extend type Query {
		trips: [Trip]
		trip(id: ID!): Trip
	}
`;

export default Trip;
