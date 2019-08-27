import { makeExecutableSchema } from 'graphql-tools';
import { User, Trip } from './types';

import userMutation from './mutations/users';
import tripMutation from './mutations/trips';
import busStopMutation from './mutations/busStops';

import userQuery from './queries/users';
import tripQuery from './queries/trips';
import busStopQuery from './queries/busStops';

const RootType = `
	type Query {
		default: String
	}
	type Mutation {
		default: String
	}
`;

const typeDefs = [RootType, User, Trip];

const resolvers = {
	Mutation: {
		...userMutation,
		...tripMutation,
		...busStopMutation
	},
	Query: {
		...userQuery,
		...tripQuery,
		...busStopQuery
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
