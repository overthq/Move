import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useCreditCardsQuery } from '@move/core';

const CreditCards = ({ userId }: { userId: string }) => {
	const [{ fetching, data, error }] = useCreditCardsQuery({
		variables: { userId }
	});
	if (fetching) return <ActivityIndicator />;
	if (error) console.error(error);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data.creditCards}
				keyExtractor={card => card._id}
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
