import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Text } from '@move/components';

const { width } = Dimensions.get('window');

interface RowProps {
	label: string;
}

const Row = ({ label }: RowProps) => {
	return (
		<TouchableOpacity activeOpacity={0.5}>
			<View style={styles.container}>
				<Text style={styles.labelText}>{label}</Text>
				<Feather name='chevron-right' color='#7B96A5' size={20} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#F2F2F2'
	},
	labelText: {
		// fontFamily: 'Rubik-Medium',
		fontSize: 18,
		color: '#7B96A5'
	}
});

export default Row;
