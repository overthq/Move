import React from 'react';
import { View, StyleSheet } from 'react-native';
import Scanner from '../components/Scanner';
import Tickets from '../components/Tickets';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
	const { user } = React.useContext(UserContext);
	const { _id: userId } = user;

	return (
		<View style={styles.container}>
			<Scanner userId={userId} />
			<Tickets {...{ userId }} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E8E8E8'
	}
});

export default Home;
