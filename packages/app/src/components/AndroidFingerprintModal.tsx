import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modalize from 'react-native-modalize';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('screen');

interface AndroidFingerprintModalProps {
	modalRef: React.RefObject<Modalize>;
}

const AndroidFingerprintModal = ({
	modalRef
}: AndroidFingerprintModalProps) => (
	<Modalize ref={modalRef} adjustToContentHeight>
		<View style={styles.container}>
			<Ionicons size={50} name='md-finger-print' color='#FF0000' />
			<Text style={styles.mainText}>Verify your fingerprint</Text>
			<Text style={styles.information}>
				Kindly display this screen to the driver as confirmation of payment.
			</Text>
		</View>
	</Modalize>
);

const styles = StyleSheet.create({
	container: {
		height: 0.5 * height,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	mainText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#161616',
		marginVertical: 15
	},
	information: {
		fontSize: 18,
		color: '#505050',
		textAlign: 'center',
		paddingHorizontal: 10
	}
});

export default AndroidFingerprintModal;
