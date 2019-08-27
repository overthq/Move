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
	createTrip?: Maybe<Trip>;
	createBusStop?: Maybe<BusStop>;
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

export type MutationCreateTripArgs = {
	input?: Maybe<TripInput>;
};

export type MutationCreateBusStopArgs = {
	input: BusStopInput;
};

export type Query = {
	__typename?: 'Query';
	default?: Maybe<Scalars['String']>;
	users?: Maybe<Array<Maybe<User>>>;
	trips?: Maybe<Array<Maybe<Trip>>>;
	trip?: Maybe<Trip>;
	busStops?: Maybe<Array<Maybe<BusStop>>>;
	busStop?: Maybe<BusStop>;
};

export type QueryTripArgs = {
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

export type Trip = {
	__typename?: 'Trip';
	_id: Scalars['ID'];
	origin: Scalars['String'];
	destination: Scalars['String'];
	fare: Scalars['Int'];
};

export type TripInput = {
	origin: Scalars['String'];
	destination: Scalars['String'];
	fare: Scalars['Int'];
};

export type User = {
	__typename?: 'User';
	_id: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
};
