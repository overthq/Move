import React from 'react';
import { TextInputProps } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AuthScreen from './AuthScreen';

export interface AuthScreenInfo extends NavigationScreenProps {
	title: string;
	header: string;
	fields: AuthScreenField[];
	onSubmit(...args: string[]): Promise<void>;
	onSuccess(): void;
	onError(error: Error): void;
	nextScreenName?: string;
}

interface AuthScreenField {
	name: string;
	placeholder: string;
	props?: TextInputProps;
}

const createAuthScreen = (info: AuthScreenInfo) => {
	return React.createElement(AuthScreen, { ...info });
};

export default createAuthScreen;
