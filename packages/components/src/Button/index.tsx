import React from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	StyleProp,
	ViewStyle,
	ActivityIndicator,
	TextStyle
} from 'react-native';
import Text from '../Text';
import variants from './variants';

interface ButtonProps extends TouchableOpacityProps {
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'clearPrimary' | 'clearSecondary';
	loading?: boolean;
	full?: boolean;
	textStyle?: StyleProp<TextStyle>;
}

const Button = ({
	children,
	variant = 'primary',
	style,
	textStyle,
	disabled,
	loading,
	full,
	...rest
}: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				{
					backgroundColor: variants[variant].backgroundColor,
					opacity: disabled ? 0.2 : 1
				},
				full && { width: '100%' },
				defaultStyles,
				style
			]}
			{...rest}
		>
			{loading && <ActivityIndicator color={variants[variant].textColor} />}
			{!loading && typeof children === 'string' ? (
				<Text
					style={[
						{
							color: variants[variant].textColor
						},
						defaultTextStyle,
						textStyle
					]}
				>
					{children}
				</Text>
			) : (
				children
			)}
		</TouchableOpacity>
	);
};

const defaultStyles: StyleProp<ViewStyle> = {
	borderRadius: 4,
	padding: 15,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
};

const defaultTextStyle: StyleProp<TextStyle> = {
	fontFamily: 'Rubik-Medium',
	fontSize: 18
};

export default Button;
