import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Modalize from 'react-native-modalize';
import Scanner from '../components/Scanner';
import Tickets from '../components/Tickets';
import { UserContext } from '../contexts/UserContext';
import PurchasePassModal from '../components/PurchasePassModal';
import { NavigationScreenProps } from 'react-navigation';

const Home = ({ navigation }: NavigationScreenProps) => {
	const { user } = React.useContext(UserContext);
	const modalRef = React.useRef<Modalize>(null);
	const { _id: userId } = user;

	return (
		<View style={styles.container}>
			<Scanner userId={userId} />
			<Tickets {...{ userId, modalRef }} />
			<Button
				title='Settings'
				onPress={() => navigation.navigate('Settings')}
			/>
			<PurchasePassModal {...{ modalRef, userId }} />
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
