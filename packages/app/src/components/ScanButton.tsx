import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ScanButton = ({ onPress }: { onPress(): void }) => (
	<TouchableOpacity style={styles.buttonHolder} {...{ onPress }}>
		<View style={styles.button}>
			<View style={styles.buttonInner}>
				<Ionicons name='ios-qr-scanner' color='#FFFFFF' size={24} />
			</View>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonHolder: {
		position: 'absolute',
		alignSelf: 'center',
		marginHorizontal: 'auto',
		bottom: 20
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: 'rgba(211, 211, 211, 0.5)'
	},
	buttonInner: {
		width: 60,
		height: 60,
		borderRadius: 30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#505050'
	}
});

export default ScanButton;
