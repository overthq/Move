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

const login = (code: string): Dispatcher => async dispatch => {
	dispatch({ type: AUTH_LOADING });
	try {
		const { user, accessToken } = await post('auth/validate-code', { code });
		return dispatch({
			type: AUTH_LOGIN,
			payload: { user, accessToken }
		});
	} catch (error) {
		return dispatch({
			type: AUTH_ERROR,
			payload: { errorMessage: error.message }
		});
	}
};

const logout = (): AuthActionType => ({ type: AUTH_LOGOUT });

export default { login, logout };
