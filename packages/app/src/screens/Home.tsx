import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modalize from 'react-native-modalize';
import Scanner from '../components/Scanner';
import SuccessModal from '../components/SuccessModal';
import Tickets from '../components/Tickets';
import { UserContext } from '../contexts/UserContext';

const Home = () => {
	const { user } = React.useContext(UserContext);
	const { _id: userId } = user;
	const modalRef = React.useRef<Modalize>(null);

	const handleModalOpen = () => {
		modalRef.current && modalRef.current.open();
	};

	return (
		<View style={styles.container}>
			<Scanner userId={userId} onSuccess={handleModalOpen} />
			<Tickets {...{ userId }} />
			<SuccessModal {...{ modalRef, userId }} />
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
