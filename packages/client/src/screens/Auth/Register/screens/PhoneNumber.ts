import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';
import state from './state';
import { register } from '../../utils';

const PhoneNumber = createAuthScreen({
	title: 'Phone Number',
	header: 'Your phone number',
	fields: [
		{
			name: 'phoneNumber',
			placeholder: 'Your phone number'
		}
	],
	onSubmit: ({ phoneNumber }) => {
		state.phoneNumber = phoneNumber;
		register(state);
	},
	onError: error => Alert.alert(error.message),
	nextScreenName: 'Code'
});

export default PhoneNumber;
