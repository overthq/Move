import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Text from '../Text';
import styles from './styles';

interface TicketProps {
	zone: string;
}

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
				<View style={{ flexGrow: 1 }}>
					{/* This works best, since we want to declare the value of the qrcode on the fly, */}
					<QRCode value='thisistheticketid' size={90} color='#7B96A5' />
				</View>
				<View
					style={{
						flexGrow: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Text bold style={styles.text}>
						{`Zone ${zone}`}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Ticket;
