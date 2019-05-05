import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Text from './Text';
import colors from './colors';

interface ButtonProps extends TouchableOpacityProps {
	children?: React.ReactNode;
	variant: 'primary' | 'secondary' | 'clearPrimary' | 'clearSecondary';
}

interface ButtonVariants {
	[key: string]: {
		backgroundColor: string;
		textColor: string;
	};
}

const variants: ButtonVariants = {
	primary: {
		backgroundColor: colors.blue.primary,
		textColor: colors.white.primary
	},
	secondary: {
		backgroundColor: colors.grey.secondary,
		textColor: colors.white.primary
	},
	clearPrimary: {
		backgroundColor: 'transparent',
		textColor: colors.blue.primary
	},
	clearSecondary: {
		backgroundColor: 'transparent',
		textColor: colors.grey.primary
	}
};

const Button = ({
	children,
	variant,
	style,
	...rest
}: ButtonProps): JSX.Element => {
	return (
		<TouchableOpacity
			style={[
				{
					backgroundColor: variants[variant].backgroundColor
				},
				style
			]}
			{...rest}
		>
			{typeof children === 'string' ? (
				<Text style={{ color: variants[variant].textColor }}>{children}</Text>
			) : (
				{ children }
			)}
		</TouchableOpacity>
	);
};

export default Button;
