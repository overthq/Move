import React from 'react';
import Modalize from 'react-native-modalize';
import { View } from 'react-native';
import { useQuery } from 'urql';
import { ROUTE } from '@move/core';

interface PaymentModalProps {
	modalRef: React.RefObject<Modalize>;
	routeId: string;
}

const PaymentModal = ({ modalRef, routeId }: PaymentModalProps) => {
	console.log(routeId);

	const [{ data, error }] = useQuery({
		query: ROUTE,
		variables: { id: routeId }
	});

	if (!data || error) {
		console.log(error);
		return <View />;
	}

	console.log(data);

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View></View>
		</Modalize>
	);
};

export default PaymentModal;
