import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Alert,
	Platform
} from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';
import { Constants } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';
import * as LocalAuthentication from 'expo-local-authentication';
import { BlurView } from 'expo-blur';
import { useUseTicketMutation } from '@move/core';
import ScannerOverlay from './ScannerOverlay';
import { UserContext } from '../contexts/UserContext';
import { ModalsContext } from '../contexts/ModalsContext';

const { width, height } = Dimensions.get('screen');

const isAndroid = Platform.OS === 'android';

const Scanner: React.FC = () => {
	const [success, setSuccess] = React.useState(false);
	const [active, setActive] = React.useState(true);
	const { settings, user } = React.useContext(UserContext);
	const { openModal, closeModal } = React.useContext(ModalsContext);

	const [{ data }, executeMutation] = useUseTicketMutation();

	const cameraRef = React.useRef<Camera>(null);

	const { _id: userId } = user;

	React.useEffect(() => {
		openModal('Settings');
	}, []);

	useFocusEffect(
		React.useCallback(() => {
			const activityTimeout = setTimeout(() => {
				if (!success && active) {
					cameraRef.current.pausePreview();
					setActive(false);
				}

				if (!active) {
					cameraRef.current.resumePreview();
					setActive(true);
				}
			}, 25000);

			return () => {
				clearTimeout(activityTimeout);
			};
		}, [success, active, cameraRef.current])
	);

	React.useEffect(() => {
		if (data?.useTicket) return openModal('Success');
	}, [data]);

	const onSuccess = (routeId: string) => executeMutation({ routeId, userId });

	const handleBarCodeScanned = async ({ data: routeId }: { data: string }) => {
		if (routeId) {
			setSuccess(true);
			// I might still have to find a way to make this function more DRY.
			if (settings?.localAuth) {
				if (isAndroid) openModal('Android Fingerprint');

				const {
					success: authSuccess
				} = await LocalAuthentication.authenticateAsync();

				if (authSuccess) {
					if (isAndroid) closeModal('Android Fingerprint');
					return onSuccess(routeId);
				}
				return Alert.alert('You have to be authenticated to use this feature.');
			}
			return onSuccess(routeId);
		}
	};

	const resumeScanning = () => {
		setActive(true);
		cameraRef.current?.resumePreview();
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
			{active ? (
				<ScannerOverlay />
			) : (
				<BlurView tint='dark' intensity={50} style={styles.blurView}>
					<TouchableOpacity
						style={styles.refreshButton}
						activeOpacity={0.8}
						onPress={resumeScanning}
					>
						<Feather name='refresh-cw' size={40} />
					</TouchableOpacity>
				</BlurView>
			)}
			<View style={styles.scannerInfoContainer}>
				<Text style={styles.scannerInfo}>
					{active ? 'Point the camera at the QR code' : 'Camera preview paused'}
				</Text>
			</View>
		</Camera>
	);
};

const styles = StyleSheet.create({
	scanner: {
		width,
		height: height / 1.5,
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
