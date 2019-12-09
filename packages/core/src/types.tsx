import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type Card = {
	__typename?: 'Card';
	_id: Scalars['ID'];
	userId: Scalars['ID'];
	cardDigits: Scalars['String'];
	cardBIN: Scalars['String'];
	expiryMonth: Scalars['String'];
	expiryYear: Scalars['String'];
	cardType: Scalars['String'];
	token: Scalars['String'];
};

export type CardInput = {
	userId: Scalars['ID'];
	cardNumber: Scalars['String'];
	cvv: Scalars['String'];
	expiryMonth: Scalars['String'];
	expiryYear: Scalars['String'];
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
	saveCard: Card;
	purchaseTicket: Ticket;
	useTicket?: Maybe<Ticket>;
	sendTicket: Ticket;
};

export type MutationLoginArgs = {
	input: LoginInput;
};

export type MutationRegisterArgs = {
	input: RegisterInput;
};

export type MutationVerifyCodeArgs = {
	phoneNumber: Scalars['String'];
	code: Scalars['String'];
};

export type MutationCreateRouteArgs = {
	input?: Maybe<RouteInput>;
};

export type MutationCreateBusStopArgs = {
	input: BusStopInput;
};

export type MutationSaveCardArgs = {
	input: CardInput;
};

export type MutationPurchaseTicketArgs = {
	input: TicketInput;
};

export type MutationUseTicketArgs = {
	routeId: Scalars['ID'];
	userId: Scalars['ID'];
};

export type MutationSendTicketArgs = {
	ticketId: Scalars['ID'];
	phoneNumber: Scalars['String'];
};

export type Query = {
	__typename?: 'Query';
	default?: Maybe<Scalars['String']>;
	users?: Maybe<Array<Maybe<User>>>;
	routes?: Maybe<Array<Maybe<Route>>>;
	route?: Maybe<Route>;
	busStops: Array<BusStop>;
	busStop: BusStop;
	cards: Array<Card>;
	tickets: Array<Ticket>;
};

export type QueryRouteArgs = {
	id: Scalars['ID'];
};

export type QueryBusStopArgs = {
	id: Scalars['ID'];
};

export type QueryCardsArgs = {
	userId: Scalars['ID'];
};

export type QueryTicketsArgs = {
	userId: Scalars['ID'];
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

export type Ticket = {
	__typename?: 'Ticket';
	_id: Scalars['ID'];
	userId: Scalars['ID'];
	route: Route;
	quantity: Scalars['Int'];
	reverse: Scalars['Boolean'];
};

export type TicketInput = {
	userId: Scalars['ID'];
	origin: Scalars['ID'];
	destination: Scalars['ID'];
	quantity?: Maybe<Scalars['Int']>;
};

export type User = {
	__typename?: 'User';
	_id: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
};

export type CreateBusStopMutationVariables = {
	name: Scalars['String'];
};

export type CreateBusStopMutation = { __typename?: 'Mutation' } & {
	createBusStop: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
};

export type SaveCardMutationVariables = {
	userId: Scalars['ID'];
	cardNumber: Scalars['String'];
	cvv: Scalars['String'];
	expiryMonth: Scalars['String'];
	expiryYear: Scalars['String'];
};

export type SaveCardMutation = { __typename?: 'Mutation' } & {
	saveCard: { __typename?: 'Card' } & Pick<
		Card,
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

export type TicketFragmentFragment = { __typename?: 'Ticket' } & Pick<
	Ticket,
	'_id' | 'userId' | 'quantity' | 'reverse'
> & {
		route: { __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
				origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
				destination: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
			};
	};

export type PurchaseTicketMutationVariables = {
	userId: Scalars['ID'];
	origin: Scalars['ID'];
	destination: Scalars['ID'];
	quantity?: Maybe<Scalars['Int']>;
};

export type PurchaseTicketMutation = { __typename?: 'Mutation' } & {
	purchaseTicket: { __typename?: 'Ticket' } & TicketFragmentFragment;
};

export type UseTicketMutationVariables = {
	routeId: Scalars['ID'];
	userId: Scalars['ID'];
};

export type UseTicketMutation = { __typename?: 'Mutation' } & {
	useTicket: Maybe<{ __typename?: 'Ticket' } & TicketFragmentFragment>;
};

export type SendTicketMutationVariables = {
	ticketId: Scalars['ID'];
	phoneNumber: Scalars['String'];
};

export type SendTicketMutation = { __typename?: 'Mutation' } & {
	sendTicket: { __typename?: 'Ticket' } & TicketFragmentFragment;
};

export type LoginMutationVariables = {
	phoneNumber: Scalars['String'];
};

export type LoginMutation = { __typename?: 'Mutation' } & Pick<
	Mutation,
	'login'
>;

export type RegisterMutationVariables = {
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
};

export type RegisterMutation = { __typename?: 'Mutation' } & Pick<
	Mutation,
	'register'
>;

export type VerifyCodeMutationVariables = {
	phoneNumber: Scalars['String'];
	code: Scalars['String'];
};

export type VerifyCodeMutation = { __typename?: 'Mutation' } & {
	verifyCode: { __typename?: 'User' } & Pick<
		User,
		'_id' | 'firstName' | 'lastName' | 'phoneNumber'
	>;
};

export type BusStopsQueryVariables = {};

export type BusStopsQuery = { __typename?: 'Query' } & {
	busStops: Array<
		{ __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'> & {
				routes: Array<
					{ __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
							origin: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
							destination: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
						}
				>;
			}
	>;
};

export type BusStopQueryVariables = {
	id: Scalars['ID'];
};

export type BusStopQuery = { __typename?: 'Query' } & {
	busStop: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'> & {
			routes: Array<
				{ __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
						origin: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
						destination: { __typename?: 'BusStop' } & Pick<BusStop, 'name'>;
					}
			>;
		};
};

export type CardsQueryVariables = {
	userId: Scalars['ID'];
};

export type CardsQuery = { __typename?: 'Query' } & {
	cards: Array<
		{ __typename?: 'Card' } & Pick<
			Card,
			| '_id'
			| 'userId'
			| 'cardDigits'
			| 'cardBIN'
			| 'expiryMonth'
			| 'expiryYear'
			| 'cardType'
			| 'token'
		>
	>;
};

export type RouteQueryVariables = {
	id: Scalars['ID'];
};

export type RouteQuery = { __typename?: 'Query' } & {
	route: Maybe<
		{ __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
				origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
				destination: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
			}
	>;
};

export type TicketsQueryVariables = {
	userId: Scalars['ID'];
};

export type TicketsQuery = { __typename?: 'Query' } & {
	tickets: Array<
		{ __typename?: 'Ticket' } & Pick<
			Ticket,
			'_id' | 'userId' | 'quantity' | 'reverse'
		> & {
				route: { __typename?: 'Route' } & Pick<Route, '_id' | 'fare'> & {
						origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
						destination: { __typename?: 'BusStop' } & Pick<
							BusStop,
							'_id' | 'name'
						>;
					};
			}
	>;
};

export const TicketFragmentFragmentDoc = gql`
	fragment TicketFragment on Ticket {
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
		reverse
	}
`;
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
			...TicketFragment
		}
	}
	${TicketFragmentFragmentDoc}
`;

export function usePurchaseTicketMutation() {
	return Urql.useMutation<
		PurchaseTicketMutation,
		PurchaseTicketMutationVariables
	>(PurchaseTicketDocument);
}
export const UseTicketDocument = gql`
	mutation UseTicket($routeId: ID!, $userId: ID!) {
		useTicket(routeId: $routeId, userId: $userId) {
			...TicketFragment
		}
	}
	${TicketFragmentFragmentDoc}
`;

export function useUseTicketMutation() {
	return Urql.useMutation<UseTicketMutation, UseTicketMutationVariables>(
		UseTicketDocument
	);
}
export const SendTicketDocument = gql`
	mutation SendTicket($ticketId: ID!, $phoneNumber: String!) {
		sendTicket(ticketId: $ticketId, phoneNumber: $phoneNumber) {
			...TicketFragment
		}
	}
	${TicketFragmentFragmentDoc}
`;

export function useSendTicketMutation() {
	return Urql.useMutation<SendTicketMutation, SendTicketMutationVariables>(
		SendTicketDocument
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
export const CardsDocument = gql`
	query Cards($userId: ID!) {
		cards(userId: $userId) {
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

export function useCardsQuery(
	options: Omit<Urql.UseQueryArgs<CardsQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<CardsQuery>({ query: CardsDocument, ...options });
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
			reverse
		}
	}
`;

export function useTicketsQuery(
	options: Omit<Urql.UseQueryArgs<TicketsQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<TicketsQuery>({ query: TicketsDocument, ...options });
}
