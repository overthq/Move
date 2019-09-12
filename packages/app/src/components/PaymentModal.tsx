import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useUseTicketMutation } from '@move/core';
import SuccessInfo from './SuccessInfo';

const { height } = Dimensions.get('window');

interface PaymentModalProps {
	modalRef: React.RefObject<Modalize>;
	userId: string;
}

const PaymentModal = ({ modalRef, userId }: PaymentModalProps) => {
	const [success, setSuccess] = React.useState(false);
	const [{ data }, executeMutation] = useUseTicketMutation();

	const handleBarCodeScanned = React.useCallback(
		async ({ data: routeId }: { data: string }) => {
			if (data && data.useTicket) return setSuccess(true);
			if (routeId) return executeMutation({ routeId, userId });
		},
		[data, executeMutation]
	);

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			{success ? (
				<SuccessInfo />
			) : (
				<BarCodeScanner
					style={styles.container}
					onBarCodeScanned={success ? undefined : handleBarCodeScanned}
				/>
			)}
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 0.7 * height,
		width: '100%'
	}
});

export default PaymentModal;
