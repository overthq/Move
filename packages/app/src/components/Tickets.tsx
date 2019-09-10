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
import { useTicketsQuery } from '@move/core';
import Ticket from './Ticket';

const Tickets = ({ userId }: { userId: string }) => {
	const [{ fetching, error, data }] = useTicketsQuery({
		variables: { userId }
	});

	if (error) console.error(error);

	return (
		<View>
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>Tickets</Text>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.sectionActionButton}
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
					style={{ marginHorizontal: -15, marginVertical: 5 }}
					ListEmptyComponent={
						<View style={{ marginLeft: 15 }}>
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
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sectionHeaderText: {
		fontSize: 20,
		fontWeight: '500',
		color: '#505050',
		marginVertical: 5
	},
	sectionActionButton: {
		height: 24,
		width: 24,
		backgroundColor: '#161616',
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center'
	},
	sectionContent: {
		color: '#777777',
		fontSize: 16
	}
});

export default Tickets;
