import React from 'react';
import { Text as NormalText } from 'react-native';

interface TextProps {
	children: string;
}

const Text = ({ children }: TextProps): JSX.Element => {
	return <NormalText>{children}</NormalText>;
};

export default Text;
