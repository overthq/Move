import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ticket as TicketProps } from '@move/core';

const Ticket = ({ route, quantity }: Omit<TicketProps, 'reverse'>) => (
	<View style={styles.container}>
		<View style={styles.ticketTitleContainer}>
			<Text style={styles.ticketTitle}>
				{route.origin.name} to {route.destination.name}
			</Text>
		</View>
		<View style={styles.ticketInfo}>
			<Text style={styles.ticketInfoText}>₦{route.fare}</Text>
			<Text style={styles.ticketInfoText}>{quantity}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#161616',
		borderRadius: 6,
		marginLeft: 15,
		overflow: 'hidden'
	},
	ticketTitleContainer: {
		padding: 5
	},
	ticketTitle: {
		fontSize: 24,
		fontWeight: '500',
		color: '#505050'
	},
	ticketInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 5,
		backgroundColor: '#505050'
	},
	ticketInfoText: {
		fontSize: 16,
		color: '#D3D3D3'
	}
});

export default Ticket;
