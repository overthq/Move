import React from 'react';
import Modalize from 'react-native-modalize';
import { View } from 'react-native';
import { useQuery } from 'urql';
import { TRIP } from '@move/core';

interface PaymentModalProps {
	modalRef: React.RefObject<Modalize>;
	tripId: string;
}

const PaymentModal = ({ modalRef, tripId }: PaymentModalProps) => {
	console.log(tripId);
	// Fetch the trip details by id

	const [{ data, error }] = useQuery({
		query: TRIP,
		variables: { id: tripId }
	});

	if (!data || error) {
		console.log(error, data);
		return <View />;
	}

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View></View>
		</Modalize>
	);
};

export default PaymentModal;
