import React from 'react';
import { TextInputProps } from 'react-native';
import { NavigationScreenProps, withNavigation } from 'react-navigation';
import AuthScreen from './AuthScreen';

interface AuthScreenInfo {
	title: string;
	header: string;
	fields: AuthScreenField[];
	onSubmit(state: { [key: string]: string }): Promise<void>;
	onSuccess?: () => void;
	onError(error: Error): void;
	nextScreenName?: string;
	initialState?: { [key: string]: string };
	buttonText?: string;
}

interface AuthScreenField {
	name: string;
	placeholder: string;
	props?: TextInputProps;
}

export type AuthScreenProps = AuthScreenInfo & NavigationScreenProps;

const createInitialState = (fields: AuthScreenField[]) => {
	const state: { [key: string]: string } = {};
	fields.forEach(key => (state[key.name] = ''));
	return state;
};

const createAuthScreen = (info: AuthScreenInfo) => {
	const AuthScreenWithNav = withNavigation(AuthScreen);
	const newAuthScreen = () =>
		React.createElement(AuthScreenWithNav, {
			...info,
			initialState: createInitialState(info.fields)
		});
	return newAuthScreen;
};

export default createAuthScreen;
