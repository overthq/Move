import React from 'react';
import Modalize from 'react-native-modalize';
import { View } from 'react-native';

interface PaymentModalProps {
	modalRef: React.RefObject<Modalize>;
	tripId: string;
}

const PaymentModal = ({ modalRef, tripId }: PaymentModalProps) => {
	console.log(tripId);
	// Fetch the trip details by id
	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View></View>
		</Modalize>
	);
};

export default PaymentModal;
