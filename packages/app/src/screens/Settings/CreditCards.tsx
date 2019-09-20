import React from 'react';
import {
	View,
	ActivityIndicator,
	StyleSheet,
	KeyboardAvoidingView
} from 'react-native';
import { useCreditCardsQuery } from '@move/core';
import { UserContext } from '../../contexts/UserContext';
import SaveCreditCard from '../../components/SaveCreditCard';

const CreditCards = () => {
	const { user } = React.useContext(UserContext);
	const [{ fetching, data, error }] = useCreditCardsQuery({
		variables: { userId: user._id }
	});
	if (fetching) return <ActivityIndicator />;
	if (error) console.error(error);
	const [creditCard] = data.creditCards;

	return creditCard ? (
		<View style={styles.container}>
			<View />
		</View>
	) : (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<SaveCreditCard userId={user._id} />
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
