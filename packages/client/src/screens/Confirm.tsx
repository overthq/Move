import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Confirm = () => {
	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.locationText}>Fagba</Text>
			<Text style={styles.locationText}>Ikeja</Text>
			<Text>₦200</Text>
			<TouchableOpacity>Confirm Payment</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	locationText: {
		fontSize: 30
	}
});

export default Confirm;
