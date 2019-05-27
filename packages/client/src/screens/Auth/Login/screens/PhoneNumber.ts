import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';
import { logIn } from '../../utils';

const PhoneNumber = createAuthScreen({
	title: 'Welcome back',
	header: 'Your phone number',
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
	nextScreenName: 'Code'
});

export default PhoneNumber;
