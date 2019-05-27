import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
	AUTH_LOADING,
	AUTH_ERROR,
	AuthReducerState,
	AUTH_LOGIN,
	AUTH_LOGOUT,
	AuthActionType
} from './types';
import { post } from '../../request';

type Dispatcher = ThunkAction<void, AuthReducerState, null, Action<string>>;

const login = (phoneNumber: string): Dispatcher => async dispatch => {
	dispatch({ type: AUTH_LOADING });
	try {
		const { user, accessToken } = await post('auth/login', { phoneNumber });
		return dispatch({
			type: AUTH_LOGIN,
			payload: { user, accessToken }
		});
	} catch (error) {
		return dispatch({
			type: AUTH_ERROR,
			payload: {}
		});
	}
};

const logout = (): AuthActionType => ({ type: AUTH_LOGOUT });

export default { login, logout };
