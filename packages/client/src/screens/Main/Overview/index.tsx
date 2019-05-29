import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

// Basically, this screen should show the user their tickets
// and the list of upcoming rides.
const Overview = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Feather name='settings' />
			</TouchableOpacity>
			<View />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default Overview;
