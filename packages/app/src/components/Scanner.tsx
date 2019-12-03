import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Alert,
	Platform
} from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import * as LocalAuthentication from 'expo-local-authentication';
import { useUseTicketMutation } from '@move/core';
import SuccessModal from './SuccessModal';
import ScannerOverlay from './ScannerOverlay';
import AndroidFingerprintModal from './AndroidFingerprintModal';
import { UserContext } from '../contexts/UserContext';

const { width, height } = Dimensions.get('screen');

interface ScannerProps {
	userId: string;
}

const Scanner = ({ userId }: ScannerProps) => {
	const [success, setSuccess] = React.useState(false);
	const [active, setActive] = React.useState(true);
	const { settings } = React.useContext(UserContext);
	const [{ data }, executeMutation] = useUseTicketMutation();
	const successModalRef = React.useRef<Modalize>(null);
	const fingerprintModalRef = React.useRef<Modalize>(null);
	const cameraRef = React.useRef<Camera>(null);

	React.useEffect(() => {
		const activityTimeout = setTimeout(() => {
			if (!success && active) {
				cameraRef.current && cameraRef.current.pausePreview();
				/*
					We set this state to:
					- Change the text in the scanner info,
					- Replace the scanner image with a refresh button.
					- Blur the paused preview.
				*/
				setActive(false);
			}
		}, 10000);
		return () => {
			clearTimeout(activityTimeout);
		};
	}, [success, active]);

	React.useEffect(() => {
		if (data && data.useTicket) {
			successModalRef.current && successModalRef.current.open();
		}
	}, [data, successModalRef]);

	const onSuccess = (routeId: string) => executeMutation({ routeId, userId });

	const handleBarCodeScanned = async ({ data: routeId }: { data: string }) => {
		if (routeId) {
			setSuccess(true);
			if (settings && settings.localAuth) {
				if (Platform.OS === 'android') {
					fingerprintModalRef.current && fingerprintModalRef.current.open();
				}
				const {
					success: authSuccess
				} = await LocalAuthentication.authenticateAsync();
				if (authSuccess) {
					if (Platform.OS === 'android') {
						fingerprintModalRef.current && fingerprintModalRef.current.close();
					}
					return onSuccess(routeId);
				}
				return Alert.alert('You have to be authenticated to use this feature.');
			}
			return onSuccess(routeId);
		}
	};

	return (
		<>
			<Camera
				style={styles.scanner}
				barCodeScannerSettings={{
					barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
				}}
				onBarCodeScanned={success ? undefined : handleBarCodeScanned}
				ref={cameraRef}
			>
				<ScannerOverlay />
				<View style={styles.scannerInfoContainer}>
					<Text style={styles.scannerInfo}>
						Point the camera at the QR code.
					</Text>
				</View>
			</Camera>
			<SuccessModal modalRef={successModalRef} {...{ userId }} />
			<AndroidFingerprintModal modalRef={fingerprintModalRef} />
		</>
	);
};

const styles = StyleSheet.create({
	scanner: {
		width,
		height: height / 1.5,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	scannerInfoContainer: {
		position: 'absolute',
		bottom: 40,
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
