import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = [];

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
