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

import Card from './cards/types';
import cardMutation from './cards/mutation';
import cardQuery from './cards/query';

import Ticket from './tickets/types';
import ticketMutation from './tickets/mutation';
import ticketQuery from './tickets/query';

const RootType = `
	type Query {
		default: String
	}
	type Mutation {
		default: String
	}
`;

const typeDefs = [RootType, User, Route, BusStop, Card, Ticket];

const resolvers = {
	Mutation: {
		...userMutation,
		...routeMutation,
		...busStopMutation,
		...cardMutation,
		...ticketMutation
	},
	Query: {
		...userQuery,
		...routeQuery,
		...busStopQuery,
		...cardQuery,
		...ticketQuery
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
