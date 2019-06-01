import { StyleSheet, Dimensions } from 'react-native';
import colors from '../colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '80%',
		padding: 15,
		borderRadius: 10,
		width: width - 100,
		marginHorizontal: 20,
		backgroundColor: colors.white.primary,
		shadowColor: '#505050',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 15
	},
	text: {
		color: '#7B96A5',
		fontSize: 30
	},
	uppercase: {
		fontSize: 16,
		letterSpacing: 5,
		textTransform: 'uppercase',
		color: '#7B96A5',
		textAlign: 'center'
	},
	validity: {
		fontSize: 32,
		color: '#7BA591',
		letterSpacing: 5,
		textAlign: 'center'
	}
});

export default styles;
