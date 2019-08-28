const BusStop = `
	type BusStop {
		_id: ID!
		name: String!
	}

	input BusStopInput {
		name: String!
	}

	extend type Query {
		busStops: [BusStop]
		busStop(id: ID!): BusStop
	}

	extend type Mutation {
		createBusStop(input: BusStopInput!): BusStop
	}
`;

export default BusStop;
