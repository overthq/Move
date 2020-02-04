import React from 'react';
import { View, StyleSheet } from 'react-native';
import Scanner from '../components/Scanner';
import Tickets from '../components/Tickets';

const Home: React.FC = () => (
	<View style={styles.container}>
		<Scanner />
		<Tickets />
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8E8E8'
	}
});

export default Home;
