import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useCreditCardsQuery } from '@move/core';
import { UserContext } from '../../contexts/UserContext';

const CreditCards = () => {
	const { user } = React.useContext(UserContext);
	const [{ fetching, data, error }] = useCreditCardsQuery({
		variables: { userId: user._id }
	});
	if (fetching) return <ActivityIndicator />;
	if (error) console.error(error);

	return (
		<View style={{ flex: 1, backgroundColor: '#757575' }}>
			<FlatList
				data={data.creditCards}
				keyExtractor={card => card._id}
				ListEmptyComponent={<Text>Save new credit card</Text>}
				renderItem={({ item, index }) => (
					<View key={index}>
						<Text>{item._id}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default CreditCards;
