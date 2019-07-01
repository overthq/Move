import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';
import { logIn } from '../utils';

const PhoneNumber = createAuthScreen({
	title: 'Phone Number',
	header: 'Welcome back',
	fields: [
		{
			name: 'phoneNumber',
			placeholder: 'Your phone number'
		}
	],
	onSubmit: ({ phoneNumber }) => {
		logIn(phoneNumber);
	},
	onError: error => Alert.alert(error.message),
	buttonText: 'Log In',
	nextScreenName: 'Code'
});

export default PhoneNumber;
