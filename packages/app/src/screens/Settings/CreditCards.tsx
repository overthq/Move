import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useCreditCardsQuery } from '@move/core';
import { UserContext } from '../../contexts/UserContext';
import SaveCreditCard from '../../components/SaveCreditCard';

const CreditCards = () => {
	const { user } = React.useContext(UserContext);
	const [{ data, error }] = useCreditCardsQuery({
		variables: { userId: user._id }
	});
	if (error) console.error(error);
	const [creditCard] = data.creditCards;

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			{creditCard ? <View /> : <SaveCreditCard userId={user._id} />}
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		backgroundColor: '#232323',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default CreditCards;
