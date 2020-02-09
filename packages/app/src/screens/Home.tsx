import React from 'react';
import { View, StyleSheet } from 'react-native';
import Scanner from '../components/Scanner';
import Tickets from '../components/Tickets';

// TODO: Remove Scanner from main app view.
// Rationale: A QR Code scanner uses the phone's camera, and consumes way too much battery.
// The scanner can be in a modal. This allows the user to scan the modal whenever they want.
// One thing though, I might run into some of the issues I had initially.
// I have to find a way to open the success modal, and close the other one.
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
