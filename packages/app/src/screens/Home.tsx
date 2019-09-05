import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modalize from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../contexts/UserContext';
import PaymentModal from '../components/PaymentModal';
import Tickets from '../components/Tickets';

const Home = () => {
	const { firstName, _id } = React.useContext(UserContext);
	const modalRef = React.useRef<Modalize>(null);

	const handleModalOpen = () => {
		modalRef.current && modalRef.current.open();
	};

	return (
		<View style={styles.container}>
			<View style={styles.welcomeContainer}>
				<Text style={styles.welcomeText}>Hello, {firstName}.</Text>
				<Ionicons
					size={24}
					name='ios-qr-scanner'
					style={styles.welcomeAction}
					onPress={handleModalOpen}
				/>
			</View>
			<View>
				<Text style={styles.sectionHeader}>Upcoming Trips</Text>
				<Text style={styles.sectionContent}>
					You do not have any upcoming trips.
				</Text>
			</View>
			<Tickets userId={_id} />
			<PaymentModal {...{ modalRef }} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	},
	sectionHeader: {
		fontSize: 18,
		fontWeight: '500',
		color: '#505050',
		marginVertical: 5
	},
	sectionContent: {
		color: '#777777'
	}
});

export default Home;
