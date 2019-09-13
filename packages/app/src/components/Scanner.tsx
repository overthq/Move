import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useUseTicketMutation } from '@move/core';

const { width, height } = Dimensions.get('window');

interface ScannerProps {
	userId: string;
	onSuccess(): void;
}

const Scanner = ({ userId, onSuccess }: ScannerProps) => {
	const [success, setSuccess] = React.useState(false);
	const [{ data }, executeMutation] = useUseTicketMutation();

	const handleBarCodeScanned = React.useCallback(
		async ({ data: routeId }: { data: string }) => {
			if (data && data.useTicket) {
				onSuccess();
				return setSuccess(true);
			}
			if (routeId) return executeMutation({ routeId, userId });
		},
		[data, executeMutation]
	);

	return (
		<BarCodeScanner
			style={styles.scanner}
			onBarCodeScanned={success ? undefined : handleBarCodeScanned}
		>
			<View style={styles.scannerInfoContainer}>
				<Text style={styles.scannerInfo}>
					Point your camera at the QR code on the bus.
				</Text>
			</View>
		</BarCodeScanner>
	);
};

const styles = StyleSheet.create({
	scanner: {
		width,
		height: height / 2,
		justifyContent: 'flex-end',
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
