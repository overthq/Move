import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../contexts/UserContext';

const Home: React.FC = () => {
	const { user } = React.useContext(UserContext);
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Hi, {user.firstName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
		backgroundColor: '#E8E8E8'
	},
	header: {
		padding: 20,
		backgroundColor: '#1E1E1E'
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold'
	}
});

export default Home;
