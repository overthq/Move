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
import Modalize from 'react-native-modalize';

interface TicketsProps {
	userId: string;
	modalRef: React.RefObject<Modalize>;
}

const Tickets = ({ userId, modalRef }: TicketsProps) => {
	const [{ fetching, error, data }] = useTicketsQuery({
		variables: { userId }
	});

	const openModal = () => modalRef.current && modalRef.current.open();

	if (error) console.error(error);

	return (
		<View style={{ padding: 15 }}>
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>Your Passes</Text>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.sectionActionButton}
					onPress={openModal}
				>
					<Feather name='plus' color='#FFFFFF' size={16} />
				</TouchableOpacity>
			</View>
			{fetching ? (
				<View style={{ justifyContent: 'center', minHeight: 80 }}>
					<ActivityIndicator />
				</View>
			) : (
				<FlatList
					data={data.tickets}
					keyExtractor={ticket => ticket._id}
					renderItem={({ item, index }) => {
						if (!item) return null;
						const { route, quantity, reverse } = item;
						const { origin, destination } = route;
						return (
							<Ticket
								key={index}
								origin={reverse ? destination.name : origin.name}
								destination={reverse ? origin.name : destination.name}
								quantity={quantity}
							/>
						);
					}}
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
