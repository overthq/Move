import React from 'react';
import { withNavigation } from 'react-navigation';
import AuthScreen from './AuthScreen';
import { AuthScreenField, AuthScreenInfo } from './types';

const createInitialState = (fields: AuthScreenField[]) => {
	const state: { [key: string]: string } = {};
	fields.forEach(key => (state[key.name] = ''));
	return state;
};

const createAuthScreen = (info: Omit<AuthScreenInfo, 'initialState'>) => {
	const AuthScreenWithNav = withNavigation(AuthScreen);
	const AuthenticationScreen = () =>
		React.createElement(AuthScreenWithNav, {
			...info,
			initialState: createInitialState(info.fields)
		});
	return AuthenticationScreen;
};

export default createAuthScreen;
