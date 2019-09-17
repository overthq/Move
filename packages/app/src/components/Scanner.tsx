import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useUseTicketMutation } from '@move/core';
import SuccessModal from './SuccessModal';
import ScannerOverlay from './ScannerOverlay';

const { width, height } = Dimensions.get('window');

interface ScannerProps {
	userId: string;
}

const Scanner = ({ userId }: ScannerProps) => {
	const [success, setSuccess] = React.useState(false);
	const [{ data }, executeMutation] = useUseTicketMutation();
	const modalRef = React.useRef<Modalize>(null);

	const handleBarCodeScanned = React.useCallback(
		async ({ data: routeId }: { data: string }) => {
			if (data && data.useTicket) {
				modalRef.current && modalRef.current.open();
				return setSuccess(true);
			}
			console.log('Proceediing to execute');
			if (routeId) return executeMutation({ routeId, userId });
		},
		[data, executeMutation, modalRef]
	);

	return (
		<>
			<BarCodeScanner
				style={styles.scanner}
				onBarCodeScanned={success ? undefined : handleBarCodeScanned}
			>
				<ScannerOverlay />
				<View style={styles.scannerInfoContainer}>
					<Text style={styles.scannerInfo}>
						{`Point the camera at the QR code.`}
					</Text>
				</View>
			</BarCodeScanner>
			<SuccessModal {...{ modalRef, userId }} />
		</>
	);
};

const styles = StyleSheet.create({
	scanner: {
		width,
		height: height / 1.5,
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 20
	},
	scannerInfoContainer: {
		padding: 10,
		borderRadius: 6,
		backgroundColor: '#FFFFFF'
	},
	scannerInfo: {
		fontSize: 16,
		fontWeight: '500'
	}
});

export default Scanner;
