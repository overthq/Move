import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';
import { store, AuthActions } from '@move/core';

const Code = createAuthScreen({
	title: 'Code',
	header: 'Verify your number',
	fields: [
		{
			name: 'code',
			placeholder: 'Verification Code'
		}
	],
	onSubmit: ({ code }) => {
		store.dispatch(AuthActions.login(code));
	},
	onSuccess: () => {},
	onError: error => Alert.alert(error.message),
	buttonText: 'Verify Code',
	nextScreenName: 'Main'
});

export default Code;
