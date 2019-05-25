import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const Email = createAuthScreen({
	title: 'Email',
	header: 'Your email address',
	fields: [
		{
			name: 'email',
			placeholder: 'Email Address'
		}
	],
	onSubmit: async () => {},
	onError: error => Alert.alert(error.message),
	nextScreenName: 'Password'
});

export default Email;
