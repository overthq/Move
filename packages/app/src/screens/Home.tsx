import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modalize from 'react-native-modalize';
import { Feather } from '@expo/vector-icons';
import { UserContext } from '../contexts/UserContext';
import PaymentModal from '../components/PaymentModal';
import Tickets from '../components/Tickets';
import ScanButton from '../components/ScanButton';
import { NavigationScreenProps } from 'react-navigation';

const Home = ({ navigation }: NavigationScreenProps) => {
	const { user } = React.useContext(UserContext);
	const { firstName, _id: userId } = user;
	const modalRef = React.useRef<Modalize>(null);

	const handleModalOpen = () => {
		modalRef.current && modalRef.current.open();
	};

	return (
		<View style={styles.container}>
			<View style={styles.welcomeContainer}>
				<Text style={styles.welcomeText}>Hello, {firstName}.</Text>
				<Feather
					size={24}
					name='settings'
					onPress={() => navigation.navigate('Settings')}
					color='#505050'
				/>
			</View>
			<Tickets {...{ userId }} />
			<PaymentModal {...{ modalRef, userId }} />
			<ScanButton onPress={handleModalOpen} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
		padding: 15
	},
	welcomeContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	welcomeText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#505050'
	},
	welcomeAction: {
		padding: 5
	}
});

export default Home;
