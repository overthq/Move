const Route = `
	type Route {
		_id: ID!
		origin: BusStop!
		destination: BusStop!
		fare: Int!
	}

	input RouteInput {
		origin: ID!
		destination: ID!
		fare: Int!
	}

	extend type Mutation {
		createRoute(input: RouteInput): Route!
	}

	extend type Query {
		routes: [Route]
		route(id: ID!): Route
	}
`;

export default Route;
