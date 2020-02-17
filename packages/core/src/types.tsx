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
	createWallet: Wallet;
	makePayment: Payment;
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

export type MutationCreateWalletArgs = {
	userId: Scalars['ID'];
};

export type MutationMakePaymentArgs = {
	input?: Maybe<PaymentInput>;
};

export type Payment = {
	__typename?: 'Payment';
	_id: Scalars['ID'];
	wallet: Wallet;
	route: Route;
};

export type PaymentInput = {
	userId: Scalars['ID'];
	routeId: Scalars['ID'];
};

export type Query = {
	__typename?: 'Query';
	default?: Maybe<Scalars['String']>;
	users?: Maybe<Array<Maybe<User>>>;
	routes?: Maybe<Array<Maybe<Route>>>;
	route?: Maybe<Route>;
	busStops: Array<BusStop>;
	busStop: BusStop;
	card: Card;
	wallet: Wallet;
	payments: Array<Payment>;
};

export type QueryRouteArgs = {
	id: Scalars['ID'];
};

export type QueryBusStopArgs = {
	id: Scalars['ID'];
};

export type QueryCardArgs = {
	userId: Scalars['ID'];
};

export type QueryWalletArgs = {
	userId: Scalars['ID'];
};

export type QueryPaymentsArgs = {
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

export type User = {
	__typename?: 'User';
	_id: Scalars['String'];
	firstName: Scalars['String'];
	lastName: Scalars['String'];
	phoneNumber: Scalars['String'];
};

export type Wallet = {
	__typename?: 'Wallet';
	_id: Scalars['ID'];
	user: User;
	value: Scalars['Int'];
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

export type MakePaymentMutationVariables = {
	userId: Scalars['ID'];
	routeId: Scalars['ID'];
};

export type MakePaymentMutation = { __typename?: 'Mutation' } & {
	makePayment: { __typename?: 'Payment' } & Pick<Payment, '_id'> & {
			route: { __typename?: 'Route' } & Pick<Route, '_id'> & {
					origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
					destination: { __typename?: 'BusStop' } & Pick<
						BusStop,
						'_id' | 'name'
					>;
				};
		};
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

export type CreateWalletMutationVariables = {
	userId: Scalars['ID'];
};

export type CreateWalletMutation = { __typename?: 'Mutation' } & {
	createWallet: { __typename?: 'Wallet' } & Pick<Wallet, '_id' | 'value'> & {
			user: { __typename?: 'User' } & Pick<User, '_id'>;
		};
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

export type CardQueryVariables = {
	userId: Scalars['ID'];
};

export type CardQuery = { __typename?: 'Query' } & {
	card: { __typename?: 'Card' } & Pick<
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

export type UserPaymentsQueryVariables = {
	userId: Scalars['ID'];
};

export type UserPaymentsQuery = { __typename?: 'Query' } & {
	payments: Array<
		{ __typename?: 'Payment' } & Pick<Payment, '_id'> & {
				route: { __typename?: 'Route' } & Pick<Route, '_id'> & {
						origin: { __typename?: 'BusStop' } & Pick<BusStop, '_id' | 'name'>;
						destination: { __typename?: 'BusStop' } & Pick<
							BusStop,
							'_id' | 'name'
						>;
					};
			}
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

export type WalletQueryVariables = {
	userId: Scalars['ID'];
};

export type WalletQuery = { __typename?: 'Query' } & {
	wallet: { __typename?: 'Wallet' } & Pick<Wallet, '_id' | 'value'> & {
			user: { __typename?: 'User' } & Pick<User, '_id'>;
		};
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
export const MakePaymentDocument = gql`
	mutation MakePayment($userId: ID!, $routeId: ID!) {
		makePayment(input: { userId: $userId, routeId: $routeId }) {
			_id
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
			}
		}
	}
`;

export function useMakePaymentMutation() {
	return Urql.useMutation<MakePaymentMutation, MakePaymentMutationVariables>(
		MakePaymentDocument
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
export const CreateWalletDocument = gql`
	mutation CreateWallet($userId: ID!) {
		createWallet(userId: $userId) {
			_id
			user {
				_id
			}
			value
		}
	}
`;

export function useCreateWalletMutation() {
	return Urql.useMutation<CreateWalletMutation, CreateWalletMutationVariables>(
		CreateWalletDocument
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
export const CardDocument = gql`
	query Card($userId: ID!) {
		card(userId: $userId) {
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

export function useCardQuery(
	options: Omit<Urql.UseQueryArgs<CardQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<CardQuery>({ query: CardDocument, ...options });
}
export const UserPaymentsDocument = gql`
	query UserPayments($userId: ID!) {
		payments(userId: $userId) {
			_id
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
			}
		}
	}
`;

export function useUserPaymentsQuery(
	options: Omit<Urql.UseQueryArgs<UserPaymentsQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<UserPaymentsQuery>({
		query: UserPaymentsDocument,
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
export const WalletDocument = gql`
	query Wallet($userId: ID!) {
		wallet(userId: $userId) {
			_id
			user {
				_id
			}
			value
		}
	}
`;

export function useWalletQuery(
	options: Omit<Urql.UseQueryArgs<WalletQueryVariables>, 'query'> = {}
) {
	return Urql.useQuery<WalletQuery>({ query: WalletDocument, ...options });
}
