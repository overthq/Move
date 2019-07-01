import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '@move/components';

const FAB = ({ onPress }: { onPress(): void }) => {
	return (
		<TouchableOpacity style={styles.container} {...{ onPress }}>
			<Feather name='credit-card' size={30} color='#FFFFFF' />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		backgroundColor: COLORS.blue.primary,
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		width: 60,
		borderRadius: 30,
		bottom: 30,
		right: 20
	}
});

export default FAB;
