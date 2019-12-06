import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useCardsQuery } from '@move/core';
import { UserContext } from '../../contexts/UserContext';
import SaveCard from '../../components/SaveCard';

// For some reason, the data.cards thing seems to be undefined.
// This is weird because the query does not return an error.

const Cards = () => {
	const { user } = React.useContext(UserContext);
	const [{ data, error }] = useCardsQuery({
		variables: { userId: user._id }
	});

	if (error) console.error(error);
	const [card] = data.cards;

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			{card ? <View /> : <SaveCard userId={user._id} />}
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

export default Cards;
