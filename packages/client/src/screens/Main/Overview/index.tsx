import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '@move/components';

const { height, width } = Dimensions.get('window');

// Basically, this screen should show the user their tickets
// and the list of upcoming rides.
const Overview = () => {
	return (
		<View style={styles.container}>
			<View style={styles.topHalf}>
				<TouchableOpacity>
					<Feather name='settings' />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	topHalf: {
		height: height / 2,
		width,
		backgroundColor: COLORS.blue.primary
	}
});

export default Overview;
