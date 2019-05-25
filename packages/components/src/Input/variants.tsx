interface InputVariants {
	[key: string]: {
		backgroundColor: string;
		textColor: string;
		placeholderTextColor: string;
	};
}

const variants: InputVariants = {
	primary: {
		backgroundColor: '#EAEAEA',
		textColor: '#505050',
		placeholderTextColor: '#939393'
	},
	secondary: {
		backgroundColor: '#505050',
		textColor: '#D3D3D3',
		placeholderTextColor: '#777777'
	}
};

export default variants;
