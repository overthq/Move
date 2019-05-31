import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import styles from './styles';

interface TicketProps {
	zone: string;
}

// Imagine this component as a rectangle with four quadrants
// Each vertical split has a style of:
// { flexDirection: "column", justifyContent: "space-between" }

const Ticket = ({ zone }: TicketProps) => {
	return (
		<View style={styles.container}>
			<View style={{ flexGrow: 1 }}>
				<View style={{ flexGrow: 1 }} />
				<View style={{ flexGrow: 1 }}>
					<Text style={styles.uppercase}>Valid Till</Text>
					<Text style={styles.validity}>29/7</Text>
				</View>
			</View>
			<View>
				<View style={{ flexGrow: 1 }}>{/* QRCode */}</View>
				<View style={{ flexGrow: 1 }}>
					<Text bold style={styles.text}>
						{`Zone ${zone}`}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Ticket;
