import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';

interface TicketProps {
	origin: string;
	destination: string;
	quantity: number;
}

const Ticket = ({ origin, destination, quantity }: TicketProps) => {
	const { showActionSheetWithOptions } = useActionSheet();

	const openActionSheet = () => {
		showActionSheetWithOptions(
			{
				options: ['Share pass', 'Cancel'],
				cancelButtonIndex: 1
			},
			buttonIndex => {
				if (buttonIndex === 0) {
					// Share the pass
				}
			}
		);
	};

	return (
		<TouchableOpacity
			style={styles.container}
			onLongPress={openActionSheet}
			activeOpacity={0.7}
		>
			<Text style={styles.ticketTitle}>
				{origin} to {destination}
			</Text>
			<Text style={styles.ticketInfo}>
				{`${quantity} unit${quantity === 1 ? '' : 's'} left`}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		marginHorizontal: 7.5,
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
