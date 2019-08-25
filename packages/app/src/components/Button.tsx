import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
	children?: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	return <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#505050'
	}
});

export default Button;
