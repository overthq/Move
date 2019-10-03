import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import { useUseTicketMutation } from '@move/core';
import SuccessModal from './SuccessModal';
import ScannerOverlay from './ScannerOverlay';

const { width, height } = Dimensions.get('screen');

interface ScannerProps {
	userId: string;
	goToSettings(): void;
}

const Scanner = ({ userId, goToSettings }: ScannerProps) => {
	const [success, setSuccess] = React.useState(false);
	const [{ data }, executeMutation] = useUseTicketMutation();
	const modalRef = React.useRef<Modalize>(null);

	const handleBarCodeScanned = React.useCallback(
		async ({ data: routeId }: { data: string }) => {
			if (data && data.useTicket) {
				modalRef.current && modalRef.current.open();
				return setSuccess(true);
			}
			if (routeId) return executeMutation({ routeId, userId });
		},
		[data, executeMutation, modalRef]
	);

	return (
		<>
			<Camera
				style={styles.scanner}
				barCodeScannerSettings={{
					barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
				}}
				onBarCodeScanned={success ? undefined : handleBarCodeScanned}
			>
				<View style={styles.actionsBar}>
					<TouchableOpacity onPress={goToSettings}>
						<Feather name='user' color='#FFFFFF' size={30} />
					</TouchableOpacity>
				</View>
				<ScannerOverlay />
				<View style={styles.scannerInfoContainer}>
					<Text style={styles.scannerInfo}>
						{`Point the camera at the QR code.`}
					</Text>
				</View>
			</Camera>
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
	actionsBar: {
		flexDirection: 'row',
		// justifyContent: 'flex-end',
		width: '100%'
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