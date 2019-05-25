import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	avoidContainer: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		width
	},
	formContainer: {
		display: 'flex',
		width: '100%',
		height: height / 3,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	pageHeader: {
		fontFamily: 'Rubik-Bold',
		fontSize: 35,
		color: '#505050',
		textAlign: 'center'
	}
});

export default styles;
