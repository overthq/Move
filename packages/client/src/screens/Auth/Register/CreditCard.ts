import { createAuthScreen } from '@move/components';
import { Alert } from 'react-native';
import { store } from '@move/core';
import { tokenizeCard } from '../utils';

const CreditCard = createAuthScreen({
	title: 'CreditCard',
	header: 'Your credit card',
	fields: [
		{
			name: 'cardNumber',
			placeholder: 'Your card number'
		},
		{
			name: 'cvv',
			placeholder: 'CVV'
		},
		{
			name: 'expiryMonth',
			placeholder: 'MM'
		},
		{
			name: 'expiryYear',
			placeholder: 'MM'
		}
	],
	onSubmit: async state => {
		console.log(state);
		const { user } = await store.getState().auth;
		if (!user) throw new Error('User not logged in');
		tokenizeCard({ ...state, userId: user.id });
	},
	onError: error => Alert.alert(error.message)
});

export default CreditCard;
