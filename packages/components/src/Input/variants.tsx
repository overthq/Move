interface InputVariants {
	[key: string]: {
		backgroundColor: string;
		textColor: string;
		placeholderTextColor: string;
	};
}

const variants: InputVariants = {
	primary: {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		textColor: '#505050',
		placeholderTextColor: '#939393'
	},
	secondary: {
		backgroundColor: 'rgba(255, 255, 255, 0.05)',
		textColor: '#D3D3D3',
		placeholderTextColor: '#777777'
	}
};

export default variants;
