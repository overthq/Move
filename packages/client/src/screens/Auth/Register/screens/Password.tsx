import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const Name = createAuthScreen({
	title: 'Password',
	header: 'Set your password',
	fields: [
		{
			name: 'password',
			placeholder: 'Password'
		},
		{
			name: 'confirmPassword',
			placeholder: 'Confirm password'
		}
	],
	onSubmit: async () => {},
	onError: error => Alert.alert(error.message),
	buttonText: 'Create Account'
});

export default Name;
