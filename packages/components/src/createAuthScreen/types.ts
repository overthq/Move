import { TextInputProps } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

export interface AuthScreenInfo {
	title: string;
	header: string;
	fields: AuthScreenField[];
	onSubmit(state: { [key: string]: string }): Promise<void> | void;
	onSuccess?: () => void;
	onError(error: Error): void;
	nextScreenName?: string;
	initialState: { [key: string]: string };
	buttonText?: string;
}

export interface AuthScreenField {
	name: string;
	placeholder: string;
	props?: TextInputProps;
}

export type AuthScreenProps = AuthScreenInfo & NavigationScreenProps;
