import { makeExecutableSchema } from 'graphql-tools';
import { User } from './types';
import userMutation from './mutations/users';

const RootType = `
	type Query {
		default: String
	}
	type Mutation {
		default: String
	}
`;

const typeDefs = [RootType, User];

const resolvers = {
	Mutation: {
		...userMutation
	},
	Query: {}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
