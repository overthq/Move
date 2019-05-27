import React from 'react';
import {
	Text as NormalText,
	TextProps as NormalTextProps,
	StyleProp,
	TextStyle
} from 'react-native';
import colors from './colors';

interface TextProps extends NormalTextProps {
	children: string;
	bold?: boolean;
}

const Text = ({ children, style, bold }: TextProps) => {
	const styles: StyleProp<TextStyle> = [
		{
			fontFamily: bold ? 'Rubik-Bold' : 'Rubik-Regular',
			color: colors.black.primary,
			fontSize: 16
		},
		style
	];
	return <NormalText style={styles}>{children}</NormalText>;
};

export default Text;
