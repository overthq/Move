export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOADING = 'AUTHLOADING';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

interface AuthUserType {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

interface AuthLoadingType {
	type: typeof AUTH_LOADING;
}

interface AuthLoginAction {
	type: typeof AUTH_LOGIN;
	payload: {
		user: AuthUserType;
		accessToken: string;
	};
}

interface AuthLogoutAction {
	type: typeof AUTH_LOGOUT;
}

interface AuthErrorAction {
	type: typeof AUTH_ERROR;
	payload: {
		errorMessage: string;
	};
}

export interface AuthReducerState {
	loading: boolean;
	user: AuthUserType | null;
	accessToken: string;
	errorMessage?: string;
}

export type AuthActionType =
	| AuthLoadingType
	| AuthLoginAction
	| AuthLogoutAction
	| AuthErrorAction;
