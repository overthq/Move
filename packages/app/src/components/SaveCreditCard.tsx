import React from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ActivityIndicator,
	Alert,
	Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSaveCardMutation } from '@move/core';

interface SaveCreditCardProps {
	userId: string;
}

const { width } = Dimensions.get('window');

const SaveCreditCard = ({ userId }: SaveCreditCardProps) => {
	const [cardNumber, setCardNumber] = React.useState('');
	const [cvv, setCvv] = React.useState('');
	const [expiryMonth, setExpiryMonth] = React.useState('');
	const [expiryYear, setExpiryYear] = React.useState('');
	const [{ fetching, data }, saveCard] = useSaveCardMutation();

	const handleSubmit = React.useCallback(() => {
		if (data && data.saveCard) return Alert.alert('Card saved.');
		return saveCard({ userId, cardNumber, cvv, expiryMonth, expiryYear });
	}, [userId, cardNumber, cvv, expiryMonth, expiryYear]);

	return (
		<>
			<TextInput
				value={cardNumber}
				onChangeText={value => setCardNumber(value)}
				placeholder={'Card Number'}
				style={styles.input}
			/>
			<TextInput
				value={cvv}
				onChangeText={value => setCvv(value)}
				placeholder={'CVV'}
				secureTextEntry
				style={styles.input}
			/>
			<View style={styles.halfInputContainer}>
				<TextInput
					value={expiryMonth}
					onChangeText={value => setExpiryMonth(value)}
					placeholder={'Expiry Month'}
					style={styles.halfInput}
				/>
				<TextInput
					value={expiryYear}
					onChangeText={value => setExpiryYear(value)}
					placeholder={'Expiry Year'}
					style={styles.halfInput}
				/>
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				onPress={handleSubmit}
				style={styles.button}
			>
				{fetching ? (
					<ActivityIndicator />
				) : (
					<Text style={styles.buttonText}>Save Card</Text>
				)}
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: '#777777',
		height: 35,
		paddingLeft: 10,
		borderRadius: 5,
		marginBottom: 10,
		width: '100%'
	},
	halfInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: 10
	},
	halfInput: {
		flexBasis: width / 2 - 20,
		backgroundColor: '#777777',
		height: 35,
		paddingHorizontal: 10,
		borderRadius: 5,
		textAlign: 'center'
	},
	button: {
		backgroundColor: '#D3D3D3',
		height: 35,
		borderRadius: 5,
		minWidth: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#161616'
	}
});

export default SaveCreditCard;
