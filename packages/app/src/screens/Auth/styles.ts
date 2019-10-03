import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginVertical: 10,
		color: '#161616'
	},
	input: {
		height: 40,
		width: '100%',
		backgroundColor: '#D3D3D3',
		color: '#505050',
		marginVertical: 20,
		paddingLeft: 10,
		borderRadius: 6
	},
	button: {
		width: '100%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6,
		backgroundColor: '#161616'
	},
	buttonText: {
		color: '#D3D3D3',
		fontWeight: 'bold',
		fontSize: 16
	},
	linkButtonText: {
		fontSize: 15,
		fontWeight: '500',
		color: '#777777'
	}
});

export default styles;
