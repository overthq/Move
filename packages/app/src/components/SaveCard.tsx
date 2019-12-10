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

interface SaveCardProps {
	userId: string;
}

const { width } = Dimensions.get('window');

const SaveCard = ({ userId }: SaveCardProps) => {
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
				onChangeText={setCardNumber}
				placeholder='Card Number'
				style={styles.input}
			/>
			<View style={styles.groupInputsContainer}>
				<View style={styles.datesContainer}>
					<TextInput
						value={expiryMonth}
						onChangeText={setExpiryMonth}
						placeholder='Expiry Month'
						style={styles.datesInput}
					/>
					<TextInput
						value={expiryYear}
						onChangeText={setExpiryYear}
						placeholder='Expiry Year'
						style={styles.datesInput}
					/>
				</View>
				<TextInput
					value={cvv}
					onChangeText={setCvv}
					placeholder='CVV'
					secureTextEntry
					style={styles.cvvInput}
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
		backgroundColor: '#FFFFFF',
		height: 35,
		paddingLeft: 10,
		borderRadius: 5,
		marginBottom: 10,
		width: '100%'
	},
	groupInputsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: 10
	},
	datesContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '75%'
	},
	datesInput: {
		flexBasis: width * 0.375 - 15,
		backgroundColor: '#FFFFFF',
		height: 35,
		paddingHorizontal: 10,
		borderRadius: 5,
		textAlign: 'center'
	},
	cvvInput: {
		backgroundColor: '#FFFFFF',
		height: 35,
		paddingHorizontal: 10,
		borderRadius: 5,
		textAlign: 'center',
		flexBasis: width * 0.25 - 15
	},
	button: {
		backgroundColor: '#161616',
		height: 35,
		borderRadius: 5,
		minWidth: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#D3D3D3'
	}
});

export default SaveCard;
