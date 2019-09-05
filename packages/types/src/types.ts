export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
}

export interface BusStop {
	__typename?: 'BusStop';
	_id: Scalars['ID'];
	name: Scalars['String'];
	routes: Route[];
}

export interface BusStopInput {
	name: Scalars['String'];
}

export interface CreditCard {
	__typename?: 'CreditCard';
	_id: Scalars['ID'];
	userId: Scalars['ID'];
	cardDigits: Scalars['String'];
	cardBIN: Scalars['String'];
	expiryMonth: Scalars['String'];
	expiryYear: Scalars['String'];
	cardType: Scalars['String'];
	token: Scalars['String'];
}

export interface CreditCardInput {
	userId: Scalars['ID'];
	cardNumber: Scalars['String'];
	cvv: Scalars['String'];
	expiryMonth: Scalars['String'];
	expiryYear: Scalars['String'];
}

export interface LoginInput {
	phoneNumber: Scalars['String'];
}

export interface Mutation {
	__typename?: 'Mutation';
	default?: Maybe<Scalars['String']>;
	login: Scalars['String'];
	register: Scalars['String'];
	verifyCode: User;
	createRoute: Route;
	createBusStop: BusStop;
	saveCard: CreditCard;
	purchaseTicket: Ticket;
}

export interface MutationLoginArgs {
	input: LoginInput;
}

export interface MutationRegisterArgs {
	input: RegisterInput;
}

export interface MutationVerifyCodeArgs {
	phoneNumber: Scalars['String'];
	code: Scalars['String'];
}

export interface MutationCreateRouteArgs {
	input?: Maybe<RouteInput>;
}

export interface MutationCreateBusStopArgs {
	input: BusStopInput;
}

export interface MutationSaveCardArgs {
	input: CreditCardInput;
}

export interface MutationPurchaseTicketArgs {
	input: TicketInput;
}

export interface Query {
	__typename?: 'Query';
	default?: Maybe<Scalars['String']>;
	users?: Maybe<Maybe<User>[]>;
	routes?: Maybe<Maybe<Route>[]>;
	route?: Maybe<Route>;
	busStops: BusStop[];
	busStop: BusStop;
	creditCards: CreditCard[];
	tickets: Ticket[];
}

export interface QueryRouteArgs {
	id: Scalars['ID'];
}

export interface QueryBusStopArgs {
	id: Scalars['ID'];
}

export interface QueryCreditCardsArgs {
	userId: Scalars['ID'];
}

export interface QueryTicketsArgs {
	userId: Scalars['ID'];
}

export interface RegisterInput {
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
}

export interface Route {
	__typename?: 'Route';
	_id: Scalars['ID'];
	origin: BusStop;
	destination: BusStop;
	fare: Scalars['Int'];
}

export interface RouteInput {
	origin: Scalars['ID'];
	destination: Scalars['ID'];
	fare: Scalars['Int'];
}

export interface Ticket {
	__typename?: 'Ticket';
	_id: Scalars['ID'];
	userId: Scalars['ID'];
	route: Route;
	quantity: Scalars['Int'];
}

export interface TicketInput {
	userId: Scalars['ID'];
	routeId: Scalars['ID'];
	quantity: Scalars['Int'];
}

export interface User {
	__typename?: 'User';
	_id: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
}
