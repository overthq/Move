import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modalize from 'react-native-modalize';
import { StackNavigationProp } from '@react-navigation/stack';
import Scanner from '../components/Scanner';
import Tickets from '../components/Tickets';
import { UserContext } from '../contexts/UserContext';
import PurchasePassModal from '../components/PurchasePassModal';

interface HomeProps {
	navigation: StackNavigationProp<any>;
}

// TODO: Begin working on new method to access the settings page

const Home = ({ navigation }: HomeProps) => {
	const { user } = React.useContext(UserContext);
	const modalRef = React.useRef<Modalize>(null);
	const { _id: userId } = user;

	return (
		<View style={styles.container}>
			<Scanner {...{ userId }} />
			<Tickets {...{ userId, modalRef }} />
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
