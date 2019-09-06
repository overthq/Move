import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'urql';
import { CREDIT_CARDS } from '@move/core';
import { CreditCard } from '@move/types';

const CreditCards = ({ userId }: { userId: string }) => {
	const [{ fetching, data, error }] = useQuery<{ creditCards: CreditCard[] }>({
		query: CREDIT_CARDS,
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
