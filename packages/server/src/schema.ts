import { makeExecutableSchema } from 'graphql-tools';
import { User, Route, BusStop } from './types';

import userMutation from './mutations/users';
import routeMutation from './mutations/routes';
import busStopMutation from './mutations/busStops';

import userQuery from './queries/users';
import routeQuery from './queries/routes';
import busStopQuery from './queries/busStops';

const RootType = `
	type Query {
		default: String
	}
	type Mutation {
		default: String
	}
`;

const typeDefs = [RootType, User, Route, BusStop];

const resolvers = {
	Mutation: {
		...userMutation,
		...routeMutation,
		...busStopMutation
	},
	Query: {
		...userQuery,
		...routeQuery,
		...busStopQuery
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
