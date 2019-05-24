import React from 'react';
import { TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';
import variants from './variants';

interface InputProps extends TextInputProps {
	variant?: string;
	full?: boolean;
}

const Input = (props: InputProps): JSX.Element => {
	const { variant = 'primary', full, style, ...rest } = props;
	return (
		<TextInput
			placeholderTextColor={variants[variant].placeholderTextColor}
			style={[
				{
					backgroundColor: variants[variant].backgroundColor,
					color: variants[variant].textColor
				},
				full && { width: '100%' },
				defaultStyle,
				style
			]}
			{...rest}
		/>
	);
};

const defaultStyle: StyleProp<TextStyle> = {
	padding: 15,
	borderRadius: 4,
	fontFamily: 'Rubik-Regular',
	fontSize: 16
};

export default Input;
