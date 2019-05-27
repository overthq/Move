import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';

const Code = createAuthScreen({
	title: 'Code',
	header: 'Verify your number',
	fields: [
		{
			name: 'code',
			placeholder: 'Verification Code'
		}
	],
	onSubmit: async () => {},
	onError: error => Alert.alert(error.message)
});

export default Code;
