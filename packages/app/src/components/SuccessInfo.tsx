import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const SuccessInfo = () => (
	<View style={styles.container}>
		<Feather name='check-circle' size={50} color='#3CBA81' />
		<Text style={styles.successText}>Ticket verified.</Text>
		<Text style={styles.successInfo}>
			Kindly display this screen to the driver as confirmation of payment.
		</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		height: 0.7 * height,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	successText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#161616',
		marginVertical: 15
	},
	successInfo: {
		fontSize: 18,
		color: '#505050',
		textAlign: 'center',
		paddingHorizontal: 10
	}
});

export default SuccessInfo;
