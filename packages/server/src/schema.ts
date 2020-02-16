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

import Wallet from './wallets/types';
import walletQuery from './wallets/query';

import Payment from './payments/types';
import paymentMutation from './payments/mutation';
import paymentQuery from './payments/query';

const RootType = `
	type Query { default: String }
	type Mutation { default: String }
`;

const typeDefs = [RootType, User, Route, BusStop, Card, Wallet, Payment];

const resolvers = {
	Mutation: {
		...userMutation,
		...routeMutation,
		...busStopMutation,
		...cardMutation,
		...paymentMutation
	},
	Query: {
		...userQuery,
		...routeQuery,
		...busStopQuery,
		...cardQuery,
		...walletQuery,
		...paymentQuery
	}
};

const schema = makeExecutableSchema({
	typeDefs,
	resolvers
});

export default schema;
