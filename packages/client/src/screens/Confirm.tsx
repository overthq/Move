import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

const Confirm = ({ navigation }: NavigationScreenProps) => {
	const { from, to, fare } = navigation.getParam('payment');
	return (
		<View style={{ flex: 1 }}>
			<Text style={styles.locationText}>{from}</Text>
			<Text style={styles.locationText}>{to}</Text>
			<Text>₦{fare}</Text>
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
