interface Colors {
	[key: string]: {
		primary: string;
		secondary: string;
		tertiary: string;
		[key: string]: string;
	};
}

const colors: Colors = {
	blue: {
		primary: '#56C4E7',
		secondary: '#A7E3F6',
		tertiary: ''
	},
	grey: {
		primary: '#505050',
		secondary: '#D3D3D3',
		tertiary: '#939393'
	},
	black: {
		primary: '#000000',
		secondary: '#141414',
		tertiary: ''
	},
	white: {
		primary: '#FFFFFF',
		secondary: '#F2F2F2',
		tertiary: ''
	}
};

export default colors;
