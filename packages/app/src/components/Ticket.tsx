import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ticket as TicketProps } from '@move/types';

const Ticket = ({ route, quantity }: TicketProps) => (
	<View style={styles.container}>
		<Text>
			{route.origin.name} to {route.destination.name}
		</Text>
		<View>
			<Text>Fare: {route.fare} naira</Text>
			<Text>{quantity}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: '#161616',
		borderRadius: 6
	}
});

export default Ticket;
