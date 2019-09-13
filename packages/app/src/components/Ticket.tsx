import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TicketProps {
	origin: string;
	destination: string;
	quantity: number;
}

const Ticket = ({ origin, destination, quantity }: TicketProps) => (
	<View style={styles.container}>
		<Text style={styles.ticketTitle}>
			{origin} to {destination}
		</Text>
		<Text style={styles.ticketInfo}>{quantity} units left</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		marginLeft: 15,
		padding: 10,
		overflow: 'hidden',
		shadowOffset: { width: 0, height: 4 },
		shadowColor: '#000000',
		shadowOpacity: 0.1,
		shadowRadius: 6
	},
	ticketTitle: {
		fontSize: 24,
		fontWeight: '500',
		color: '#161616'
	},
	ticketInfo: {
		fontSize: 16,
		color: '#505050'
	}
});

export default Ticket;
