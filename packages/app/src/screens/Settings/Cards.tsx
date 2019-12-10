import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { useCardsQuery } from '@move/core';
import { UserContext } from '../../contexts/UserContext';
import SaveCard from '../../components/SaveCard';

const Cards = () => {
	const { user } = React.useContext(UserContext);
	const [{ fetching, data }] = useCardsQuery({
		variables: { userId: user._id }
	});

	if (fetching) return null;
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
		backgroundColor: '#E8E8E8',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Cards;
