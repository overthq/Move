import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
	variant: string;
}

const Input = (props: InputProps): JSX.Element => {
	const { style, ...rest } = props;
	return (
		<TextInput
			style={[
				{
					padding: 10
				},
				style
			]}
			{...rest}
		/>
	);
};

export default Input;
