import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../contexts/UserContext';

const Home: React.FC = () => {
	const { user } = React.useContext(UserContext);
	const { navigate } = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Hi, {user.firstName}</Text>
			</View>
			<TouchableOpacity onPress={() => navigate('Scanner')}>
				<Text>Open Scanner</Text>
			</TouchableOpacity>
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
		padding: 20
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold'
	}
});

export default Home;
