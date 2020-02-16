import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import ScannerOverlay from '../components/ScannerOverlay';
import { useNavigation } from '@react-navigation/native';

const Scanner: React.FC = () => {
	const [success, setSuccess] = React.useState(false);
	const cameraRef = React.useRef<Camera>(null);
	const { navigate, goBack } = useNavigation();

	const handleBarCodeScanned = async ({ data }: { data: string }) => {
		if (data) {
			goBack();
			navigate('ConfirmPayment', { routeId: data });
			setSuccess(true);
		}
	};

	return (
		<Camera
			style={styles.scanner}
			barCodeScannerSettings={{
				barCodeTypes: [Constants.BarCodeType.qr]
			}}
			onBarCodeScanned={success ? undefined : handleBarCodeScanned}
			ref={cameraRef}
		>
			<ScannerOverlay />
			<View style={styles.scannerInfoContainer}>
				<Text style={styles.scannerInfo}>Point the camera at the QR code</Text>
			</View>
		</Camera>
	);
};

const styles = StyleSheet.create({
	scanner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scannerInfoContainer: {
		position: 'absolute',
		bottom: 25,
		padding: 10,
		borderRadius: 6,
		backgroundColor: '#FFFFFF'
	},
	scannerInfo: {
		fontSize: 16,
		fontWeight: '500'
	},
	blurView: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	refreshButton: {
		width: 75,
		height: 75,
		borderRadius: 30,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Scanner;
