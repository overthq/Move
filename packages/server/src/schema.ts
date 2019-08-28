import { makeExecutableSchema } from 'graphql-tools';

import User from './users/types';
import userMutation from './users/mutation';
import userQuery from './users/query';

import Route from './routes/types';
import routeMutation from './routes/mutation';
import routeQuery from './routes/query';

import BusStop from './busStops/types';
import busStopMutation from './busStops/mutation';
import busStopQuery from './busStops/query';

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
