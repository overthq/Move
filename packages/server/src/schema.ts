import { makeExecutableSchema } from 'graphql-tools';
import { User, Trip } from './types';

import userMutation from './mutations/users';
import tripMutation from './mutations/trips';

import userQuery from './queries/users';

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
		...tripMutation
	},
	Query: {
		...userQuery
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
