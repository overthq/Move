import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const PhoneNumber = createAuthScreen({
	title: 'Welcome back',
	header: 'Your phone number',
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

export default PhoneNumber;
