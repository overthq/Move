import React from 'react';
import { View, Text, Platform } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import {
	useFocusEffect,
	useRoute,
	useNavigation,
	RouteProp
} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../contexts/UserContext';
import { MainStackParamList } from '../screens';

const ConfirmPayment: React.FC = () => {
	const { navigate } = useNavigation();
	const { params } = useRoute<
		RouteProp<MainStackParamList, 'ConfirmPayment'>
	>();
	const { settings } = React.useContext(UserContext);

	useFocusEffect(
		React.useCallback(() => {
			(async () => {
				if (settings?.localAuth) {
					const { success } = await LocalAuthentication.authenticateAsync();
					if (success) {
						try {
							console.log({ params });
						} finally {
							navigate('Home');
						}
						// Find a way to animate the fingerprint circle thing.
						// Do the thing
					}
				}
			})();
		}, [])
	);

	return (
		<View>
			{Platform.OS === 'android' && (
				<>
					<Text>Scan fingerprint to continue</Text>
					<Ionicons name='ios-fingerprint' size={30} />
				</>
			)}
		</View>
	);
};

export default ConfirmPayment;
