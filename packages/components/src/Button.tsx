import React from 'react';
import { TouchableOpacity } from 'react-native';

interface ButtonProps {
	children?: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
	return <TouchableOpacity>{children}</TouchableOpacity>;
};

export default Button;
