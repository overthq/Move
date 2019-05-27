import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';
import { AuthActions } from '@move/core';

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
		AuthActions.login(code);
	},
	onSuccess: () => {},
	onError: error => Alert.alert(error.message)
});

export default Code;
