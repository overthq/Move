import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Modalize from 'react-native-modalize';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useUseTicketMutation } from '@move/core';
import SuccessModal from './SuccessModal';
import ScannerOverlay from './ScannerOverlay';

const { width, height } = Dimensions.get('window');

interface ScannerProps {
	userId: string;
}

const Scanner = ({ userId }: ScannerProps) => {
	const [{ data }, executeMutation] = useUseTicketMutation();
	const modalRef = React.useRef<Modalize>(null);

	const handleBarCodeScanned = React.useCallback(
		async ({ data: routeId }: { data: string }) => {
			if (data && data.useTicket) {
				return modalRef.current && modalRef.current.open();
			}
			if (routeId) return executeMutation({ routeId, userId });
		},
		[data, executeMutation, modalRef]
	);

	return (
		<>
			<View style={styles.scanner}>
				<QRCodeScanner
					reactivate={false}
					onRead={handleBarCodeScanned}
					cameraStyle={{ height: height / 1.5 } as any}
					topViewStyle={styles.disableSection as any}
					bottomViewStyle={styles.disableSection as any}
				/>
				<View style={styles.scannerOverlayContainer}>
					<ScannerOverlay />
					<View style={styles.scannerInfoContainer}>
						<Text style={styles.scannerInfo}>
							{`Point the camera at the QR code.`}
						</Text>
					</View>
				</View>
			</View>
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
	scannerOverlayContainer: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	scannerInfoContainer: {
		padding: 10,
		borderRadius: 6,
		backgroundColor: '#FFFFFF'
	},
	scannerInfo: {
		fontSize: 16,
		fontWeight: '500'
	},
	disableSection: {
		flex: 0,
		height: 0
	}
});

export default Scanner;
