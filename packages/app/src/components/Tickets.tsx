import React from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useQuery } from 'urql';
import { TICKETS } from '@move/core';
import { Ticket as TicketType } from '@move/types';
import Ticket from './Ticket';

const Tickets = ({ userId }: { userId: string }) => {
	const [{ fetching, error, data }] = useQuery<{ tickets: TicketType[] }>({
		query: TICKETS,
		variables: { userId }
	});

	if (error) console.error(error);
	const { tickets } = data;

	return (
		<View>
			<Text>Tickets</Text>
			{fetching ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={tickets}
					keyExtractor={ticket => ticket._id}
					renderItem={({ item, index }) => <Ticket key={index} {...item} />}
					horizontal
					ListEmptyComponent={<Text>{`You don't have any tickets.`}</Text>}
				/>
			)}
		</View>
	);
};

export default Tickets;
