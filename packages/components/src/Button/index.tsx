import React from 'react';
import {
	TouchableOpacity,
	TouchableOpacityProps,
	StyleProp,
	ViewStyle
} from 'react-native';
import Text from '../Text';
import variants from './variants';

interface ButtonProps extends TouchableOpacityProps {
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'clearPrimary' | 'clearSecondary';
	full?: boolean;
}

const Button = ({
	children,
	variant = 'primary',
	style,
	disabled,
	full,
	...rest
}: ButtonProps): JSX.Element => {
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
			{typeof children === 'string' ? (
				<Text
					style={{
						color: variants[variant].textColor,
						fontFamily: 'Rubik-Medium',
						fontSize: 18
					}}
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

export default Button;
