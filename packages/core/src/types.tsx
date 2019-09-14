import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
	useTicket: Scalars['String'];
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

export interface MutationUseTicketArgs {
	routeId: Scalars['ID'];
	userId: Scalars['ID'];
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
	reverse: Scalars['Boolean'];
}

export interface TicketInput {
	userId: Scalars['ID'];
	origin: Scalars['ID'];
	destination: Scalars['ID'];
	quantity?: Maybe<Scalars['Int']>;
}

export interface User {
	__typename?: 'User';
	_id: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
}
export interface CreateBusStopMutationVariables {
	name: Scalars['String'];
}

export type CreateBusStopMutation = { __typename?: 'Mutation' } & {
	createBusStop: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
};

export interface SaveCardMutationVariables {
	userId: Scalars['ID'];
	cardNumber: Scalars['String'];
	cvv: Scalars['String'];
	expiryMonth: Scalars['String'];
	expiryYear: Scalars['String'];
}

export type SaveCardMutation = { __typename?: 'Mutation' } & {
	saveCard: { __typename?: 'CreditCard' } & Pick<
		CreditCard,
		| '_id'
		| 'userId'
		| 'cardDigits'
		| 'cardBIN'
		| 'expiryMonth'
		| 'expiryYear'
		| 'cardType'
		| 'token'
	>;
};

export interface PurchaseTicketMutationVariables {
	userId: Scalars['ID'];
	origin: Scalars['ID'];
	destination: Scalars['ID'];
	quantity?: Maybe<Scalars['Int']>;
}

export type PurchaseTicketMutation = { __typename?: 'Mutation' } & {
	purchaseTicket: { __typename?: 'Ticket' } & Pick<
		Ticket,
		'_id' | 'userId' | 'quantity'
	> & {
			route: { __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
					origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
					destination: { __typename?: 'BusStop' } & Pick<
						BusStop,
						'_id' | 'name'
					>;
				};
		};
};

export interface UseTicketMutationVariables {
	routeId: Scalars['ID'];
	userId: Scalars['ID'];
}

export type UseTicketMutation = { __typename?: 'Mutation' } & Pick<
	Mutation,
	'useTicket'
>;

export interface LoginMutationVariables {
	phoneNumber: Scalars['String'];
}

export type LoginMutation = { __typename?: 'Mutation' } & Pick<
	Mutation,
	'login'
>;

export interface RegisterMutationVariables {
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
}

export type RegisterMutation = { __typename?: 'Mutation' } & Pick<
	Mutation,
	'register'
>;

export interface VerifyCodeMutationVariables {
	phoneNumber: Scalars['String'];
	code: Scalars['String'];
}

export type VerifyCodeMutation = { __typename?: 'Mutation' } & {
	verifyCode: { __typename?: 'User' } & Pick<
		User,
		'_id' | 'firstName' | 'lastName' | 'phoneNumber'
	>;
};

export interface BusStopsQueryVariables {}

export type BusStopsQuery = { __typename?: 'Query' } & {
	busStops: ({ __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'> & {
			routes: ({ __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
					origin: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
					destination: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
				})[];
		})[];
};

export interface BusStopQueryVariables {
	id: Scalars['ID'];
}

export type BusStopQuery = { __typename?: 'Query' } & {
	busStop: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'> & {
			routes: ({ __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
					origin: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
					destination: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
				})[];
		};
};

export interface CreditCardsQueryVariables {
	userId: Scalars['ID'];
}

export type CreditCardsQuery = { __typename?: 'Query' } & {
	creditCards: ({ __typename?: 'CreditCard' } & Pick<
		CreditCard,
		| '_id'
		| 'userId'
		| 'cardDigits'
		| 'cardBIN'
		| 'expiryMonth'
		| 'expiryYear'
		| 'cardType'
		| 'token'
	>)[];
};

export interface RouteQueryVariables {
	id: Scalars['ID'];
}

export type RouteQuery = { __typename?: 'Query' } & {
	route: Maybe<
		{ __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
				origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
				destination: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
			}
	>;
};

export interface TicketsQueryVariables {
	userId: Scalars['ID'];
}

export type TicketsQuery = { __typename?: 'Query' } & {
	tickets: ({ __typename?: 'Ticket' } & Pick<
		Ticket,
		'_id' | 'userId' | 'quantity'
	> & {
			route: { __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
					origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
					destination: { __typename?: 'BusStop' } & Pick<
						BusStop,
						'_id' | 'name'
					>;
				};
		})[];
};

export const CreateBusStopDocument = gql`
	mutation CreateBusStop($name: String!) {
		createBusStop(input: { name: $name }) {
			_id
			name
		}
	}
`;

export function useCreateBusStopMutation() {
	return Urql.useMutation<
		CreateBusStopMutation,
		CreateBusStopMutationVariables
	>(CreateBusStopDocument);
}
export const SaveCardDocument = gql`
	mutation SaveCard(
		$userId: ID!
		$cardNumber: String!
		$cvv: String!
		$expiryMonth: String!
		$expiryYear: String!
	) {
		saveCard(
			input: {
				userId: $userId
				cardNumber: $cardNumber
				cvv: $cvv
				expiryMonth: $expiryMonth
				expiryYear: $expiryYear
			}
		) {
			_id
			userId
			cardDigits
			cardBIN
			expiryMonth
			expiryYear
			cardType
			token
		}
	}
`;

export function useSaveCardMutation() {
	return Urql.useMutation<SaveCardMutation, SaveCardMutationVariables>(
		SaveCardDocument
	);
}
export const PurchaseTicketDocument = gql`
	mutation PurchaseTicket(
		$userId: ID!
		$origin: ID!
		$destination: ID!
		$quantity: Int
	) {
		purchaseTicket(
			input: {
				userId: $userId
				origin: $origin
				destination: $destination
				quantity: $quantity
			}
		) {
			_id
			userId
			route {
				_id
				origin {
					_id
					name
				}
				destination {
					_id
					name
				}
				fare
			}
			quantity
		}
	}
`;

export function usePurchaseTicketMutation() {
	return Urql.useMutation<
		PurchaseTicketMutation,
		PurchaseTicketMutationVariables
	>(PurchaseTicketDocument);
}
export const UseTicketDocument = gql`
	mutation UseTicket($routeId: ID!, $userId: ID!) {
		useTicket(routeId: $routeId, userId: $userId)
	}
`;

export function useUseTicketMutation() {
	return Urql.useMutation<UseTicketMutation, UseTicketMutationVariables>(
		UseTicketDocument
	);
}
export const LoginDocument = gql`
	mutation Login($phoneNumber: String!) {
		login(input: { phoneNumber: $phoneNumber })
	}
`;

export function useLoginMutation() {
	return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const RegisterDocument = gql`
	mutation Register(
		$firstName: String!
		$lastName: String!
		$phoneNumber: String!
	) {
		register(
			input: {
				firstName: $firstName
				lastName: $lastName
				phoneNumber: $phoneNumber
			}
		)
	}
`;

export function useRegisterMutation() {
	return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
		RegisterDocument
	);
}
export const VerifyCodeDocument = gql`
	mutation VerifyCode($phoneNumber: String!, $code: String!) {
		verifyCode(phoneNumber: $phoneNumber, code: $code) {
			_id
			firstName
			lastName
			phoneNumber
		}
	}
`;

export function useVerifyCodeMutation() {
	return Urql.useMutation<VerifyCodeMutation, VerifyCodeMutationVariables>(
		VerifyCodeDocument
	);
}
export const BusStopsDocument = gql`
	query BusStops {
		busStops {
			_id
			name
			routes {
				_id
				origin {
					name
				}
				destination {
					name
				}
				fare
			}
		}
	}
`;

export function useBusStopsQuery(
	options: Omit<Urql.UseQueryArgs<BusStopsQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<BusStopsQuery>({ query: BusStopsDocument, ...options });
}
export const BusStopDocument = gql`
	query BusStop($id: ID!) {
		busStop(id: $id) {
			_id
			name
			routes {
				_id
				origin {
					name
				}
				destination {
					name
				}
				fare
			}
		}
	}
`;

export function useBusStopQuery(
	options: Omit<Urql.UseQueryArgs<BusStopQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<BusStopQuery>({ query: BusStopDocument, ...options });
}
export const CreditCardsDocument = gql`
	query CreditCards($userId: ID!) {
		creditCards(userId: $userId) {
			_id
			userId
			cardDigits
			cardBIN
			expiryMonth
			expiryYear
			cardType
			token
		}
	}
`;

export function useCreditCardsQuery(
	options: Omit<Urql.UseQueryArgs<CreditCardsQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<CreditCardsQuery>({
		query: CreditCardsDocument,
		...options
	});
}
export const RouteDocument = gql`
	query Route($id: ID!) {
		route(id: $id) {
			_id
			origin {
				_id
				name
			}
			destination {
				_id
				name
			}
			fare
		}
	}
`;

export function useRouteQuery(
	options: Omit<Urql.UseQueryArgs<RouteQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<RouteQuery>({ query: RouteDocument, ...options });
}
export const TicketsDocument = gql`
	query Tickets($userId: ID!) {
		tickets(userId: $userId) {
			_id
			userId
			route {
				_id
				origin {
					_id
					name
				}
				destination {
					_id
					name
				}
				fare
			}
			quantity
		}
	}
`;

export function useTicketsQuery(
	options: Omit<Urql.UseQueryArgs<TicketsQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<TicketsQuery>({ query: TicketsDocument, ...options });
}
