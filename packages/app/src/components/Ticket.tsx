import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ticket as TicketProps } from '@move/types';

const Ticket = ({ route }: TicketProps) => (
	<View style={styles.container}>
		<Text>{route.origin.name}</Text>
		<Text>{route.destination.name}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {}
});

export default Ticket;
