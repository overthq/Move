import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SaveCreditCard = () => {
	const [cardNumber, setCardNumber] = React.useState('');
	const [cvv, setCvv] = React.useState('');
	const [expiryMonth, setExpiryMonth] = React.useState('');
	const [expiryYear, setExpiryYear] = React.useState('');

	const handleSubmit = () => {};

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
				<Text style={styles.buttonText}>Save Card</Text>
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
		width: '100%',
		marginBottom: 10
	},
	halfInput: {
		flexGrow: 1,
		// flexBasis: -15,
		backgroundColor: '#777777',
		height: 35,
		paddingLeft: 10,
		borderRadius: 5
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
