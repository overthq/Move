import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const Name = createAuthScreen({
	title: 'Name',
	header: `What's your name?`,
	onSubmit: async () => {},
	fields: [
		{
			name: 'firstName',
			placeholder: 'Your first name'
		},
		{
			name: 'lastName',
			placeholder: 'Your last name'
		}
	],
	onError: error => Alert.alert(error.message),
	nextScreenName: 'Email'
});

export default Name;
