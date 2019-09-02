import React from 'react';
import Modalize from 'react-native-modalize';
import { View, Text } from 'react-native';
import { useQuery } from 'urql';
import { ROUTE } from '@move/core';
import { Route } from '@move/types';

interface PaymentModalProps {
	modalRef: any;
	routeId: string;
}

const PaymentModal = ({ modalRef, routeId }: PaymentModalProps) => {
	const [{ data, error }] = useQuery<{ route: Route }>({
		query: ROUTE,
		variables: { id: routeId }
	});

	if (!data || error) return <View />;

	const { route } = data;

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View>
				<Text>{route.origin.name}</Text>
				<Text>{route.destination.name}</Text>
				<Text>{route.fare}</Text>
			</View>
		</Modalize>
	);
};

export default PaymentModal;
