import {
	AuthActionType,
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AuthReducerState,
	AUTH_ERROR
} from './types';

const initialState: AuthReducerState = {
	loading: false,
	user: null,
	accessToken: '',
	errorMessage: ''
};

const authReducer = (
	state = initialState,
	action: AuthActionType
): AuthReducerState => {
	switch (action.type) {
		case AUTH_LOGIN:
			return {
				...state,
				user: action.payload.user,
				accessToken: action.payload.accessToken
			};
		case AUTH_LOGOUT:
			return initialState;
		case AUTH_ERROR:
			return { ...state, errorMessage: action.payload.errorMessage };
		default:
			return state;
	}
};

export default authReducer;
