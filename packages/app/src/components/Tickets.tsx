import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'urql';
import { TICKETS } from '@move/core';
import { Ticket } from '@move/types';

const Tickets = ({ userId }: { userId: string }) => {
	const [{ fetching, error, data }] = useQuery<{ tickets: Ticket[] }>({
		query: TICKETS,
		variables: { userId }
	});

	if (error) console.error(error);
	const { tickets } = data;

	return (
		<View>
			<Text>Tickets</Text>
			{fetching && <ActivityIndicator />}
			<FlatList
				data={tickets}
				keyExtractor={ticket => ticket._id}
				renderItem={({ item, index }) => (
					<View key={index}>
						<Text>{item._id}</Text>
					</View>
				)}
				horizontal
				ListEmptyComponent={<Text>{`You don't have any tickets.`}</Text>}
			/>
		</View>
	);
};

export default Tickets;
