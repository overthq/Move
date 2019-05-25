import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const Login = createAuthScreen({
	title: 'Login',
	header: 'Welcome back',
	fields: [
		{
			name: 'phoneNumber',
			placeholder: 'Your phone number'
		}
	],
	onSubmit: async () => {},
	onError: error => Alert.alert(error.message),
	nextScreenName: 'Code'
});

export default Login;
