export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type BusStop = {
	__typename?: 'BusStop';
	_id: Scalars['ID'];
	name: Scalars['String'];
	routes: Array<Route>;
};

export type BusStopInput = {
	name: Scalars['String'];
};

export type LoginInput = {
	phoneNumber: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	default?: Maybe<Scalars['String']>;
	login: Scalars['String'];
	register: Scalars['String'];
	verifyCode: User;
	createRoute: Route;
	createBusStop: BusStop;
};

export type MutationLoginArgs = {
	input: LoginInput;
};

export type MutationRegisterArgs = {
	input: RegisterInput;
};

export type MutationVerifyCodeArgs = {
	code: Scalars['String'];
};

export type MutationCreateRouteArgs = {
	input?: Maybe<RouteInput>;
};

export type MutationCreateBusStopArgs = {
	input: BusStopInput;
};

export type Query = {
	__typename?: 'Query';
	default?: Maybe<Scalars['String']>;
	users?: Maybe<Array<Maybe<User>>>;
	routes?: Maybe<Array<Maybe<Route>>>;
	route?: Maybe<Route>;
	busStops: Array<BusStop>;
	busStop: BusStop;
};

export type QueryRouteArgs = {
	id: Scalars['ID'];
};

export type QueryBusStopArgs = {
	id: Scalars['ID'];
};

export type RegisterInput = {
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
};

export type Route = {
	__typename?: 'Route';
	_id: Scalars['ID'];
	origin: BusStop;
	destination: BusStop;
	fare: Scalars['Int'];
};

export type RouteInput = {
	origin: Scalars['ID'];
	destination: Scalars['ID'];
	fare: Scalars['Int'];
};

export type User = {
	__typename?: 'User';
	_id: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
};
