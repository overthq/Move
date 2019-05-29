import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import styles from './styles';

interface TicketProps {
	name: string;
}

const Ticket = ({ name }: TicketProps) => {
	return (
		<View style={styles.container}>
			<Text>{name}</Text>
		</View>
	);
};

export default Ticket;
