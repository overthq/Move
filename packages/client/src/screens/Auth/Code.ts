import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const Login = createAuthScreen({
	title: 'Code',
	header: 'Security Code',
	fields: [
		{
			name: 'code',
			placeholder: 'Enter code here'
		}
	],
	onSubmit: async () => {
		// Verify the code
	},
	onSuccess: () => {
		// Go to the next page
	},
	onError: error => Alert.alert(error.message), // Maybe go back to login
	buttonText: 'Verify Code',
	nextScreenName: 'Main'
});

export default Login;
