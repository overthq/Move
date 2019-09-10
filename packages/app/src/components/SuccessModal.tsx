import React from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useUseTicketMutation } from '@move/core';
import { Feather } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const SuccessInfo = () => (
	<View style={styles.container}>
		<Feather name='check' size={40} color='#3CBA81' />
		<Text style={styles.successText}>Ticket successfully used.</Text>
		<Text style={styles.successInfo}>
			You can display this screen to the driver as confirmation of payment
		</Text>
	</View>
);

interface SuccessModalProps {
	modalRef: React.RefObject<Modalize>;
	userId: string;
}

const SuccessModal = ({ modalRef, userId }: SuccessModalProps) => {
	const [routeId, setRouteId] = React.useState('');
	const [success, setSuccess] = React.useState(false);
	const [{ data }, executeMutation] = useUseTicketMutation();
	const handleBarCodeScanned = ({ data }: { data: string }) => {
		setRouteId(data);
	};

	React.useEffect(() => {
		if (routeId) {
			executeMutation({ routeId, userId });
			if (data && data.useTicket) setSuccess(true);
		}
	}, [routeId, success, data, executeMutation]);

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			{routeId && success ? (
				<SuccessInfo />
			) : (
				<BarCodeScanner
					style={styles.container}
					onBarCodeScanned={handleBarCodeScanned}
				/>
			)}
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 0.7 * height,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	successText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#161616',
		marginVertical: 20
	},
	successInfo: {
		fontSize: 20,
		color: '#505050'
	}
});

export default SuccessModal;
