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

import CreditCard from './creditCards/types';
import creditCardMutation from './creditCards/mutation';
import creditCardQuery from './creditCards/query';

const RootType = `
	type Query {
		default: String
	}
	type Mutation {
		default: String
	}
`;

const typeDefs = [RootType, User, Route, BusStop, CreditCard];

const resolvers = {
	Mutation: {
		...userMutation,
		...routeMutation,
		...busStopMutation,
		...creditCardMutation
	},
	Query: {
		...userQuery,
		...routeQuery,
		...busStopQuery,
		...creditCardQuery
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
