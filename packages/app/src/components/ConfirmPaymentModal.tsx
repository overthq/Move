import React from 'react';
import { View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ConfirmPaymentModal: React.FC = () => {
	const { params } = useRoute();

	useFocusEffect(
		React.useCallback(() => {
			(async () => {
				const { success } = await LocalAuthentication.authenticateAsync();
			})();
		}, [])
	);

	return (
		<View>
			<Ionicons name='ios-fingerprint' size={30} />
		</View>
	);
};

export default ConfirmPaymentModal;
