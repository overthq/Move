import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		height: 400,
		borderRadius: 6,
		width: width - 40,
		marginHorizontal: 20
	}
});

export default styles;
