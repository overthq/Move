import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Modalize from 'react-native-modalize';
import Feather from 'react-native-vector-icons/Feather';

const { height } = Dimensions.get('window');

interface SuccessModalProps {
	modalRef: React.RefObject<Modalize>;
}

const SuccessModal = ({ modalRef }: SuccessModalProps) => (
	<Modalize ref={modalRef} adjustToContentHeight>
		<View style={styles.container}>
			<Feather name='check-circle' size={50} color='#3CBA81' />
			<Text style={styles.successText}>Ticket verified.</Text>
			<Text style={styles.successInfo}>
				Kindly display this screen to the driver as confirmation of payment.
			</Text>
		</View>
	</Modalize>
);

const styles = StyleSheet.create({
	container: {
		height: 0.7 * height,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	successText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#161616',
		marginVertical: 15
	},
	successInfo: {
		fontSize: 18,
		color: '#505050',
		textAlign: 'center',
		paddingHorizontal: 10
	}
});

export default SuccessModal;
