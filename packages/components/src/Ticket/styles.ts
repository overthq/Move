import { StyleSheet, Dimensions } from 'react-native';
import colors from '../colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		height: 400,
		borderRadius: 6,
		width: width - 40,
		marginHorizontal: 20,
		backgroundColor: colors.blue.primary
	}
});

export default styles;
