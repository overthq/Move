import colors from '../colors';

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

export default variants;
