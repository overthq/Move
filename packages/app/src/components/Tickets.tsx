import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'urql';
import { TICKETS } from '@move/core';

const Tickets = ({ userId }: { userId: string }) => {
	const [{ fetching, error, data }] = useQuery({
		query: TICKETS,
		variables: { userId }
	});

	if (error) console.error(error);
	if (!data || !data.tickets) return null;
	const { tickets } = data;

	return (
		<View>
			<Text>Tickets</Text>
			{fetching && <ActivityIndicator />}
			{tickets && tickets.length && (
				<FlatList
					keyExtractor={ticket => ticket._id}
					renderItem={({ item, index }) => (
						<View key={index}>
							<Text>{item._id}</Text>
						</View>
					)}
					horizontal
					data={tickets}
				/>
			)}
		</View>
	);
};

export default Tickets;
