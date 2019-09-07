import React from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	FlatList,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';
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

	return (
		<View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Text style={styles.sectionHeader}>Tickets</Text>
				<TouchableOpacity
					activeOpacity={0.7}
					style={{
						height: 24,
						width: 24,
						backgroundColor: '#161616',
						borderRadius: 12,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Feather name='plus' color='#FFFFFF' size={16} />
				</TouchableOpacity>
			</View>
			{fetching ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={data.tickets}
					keyExtractor={ticket => ticket._id}
					renderItem={({ item, index }) => <Ticket key={index} {...item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{ marginVertical: 5 }}
					style={{ marginHorizontal: -15 }}
					ListEmptyComponent={
						<View>
							<Text style={styles.sectionContent}>
								{`You don't currently have any tickets.`}
							</Text>
						</View>
					}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	sectionHeader: {
		fontSize: 18,
		fontWeight: '500',
		color: '#505050',
		marginVertical: 5
	},
	sectionContent: {
		color: '#777777'
	}
});

export default Tickets;
