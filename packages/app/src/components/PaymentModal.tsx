import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator
} from 'react-native';
import Modalize from 'react-native-modalize';
import { useQuery } from 'urql';
import { ROUTE } from '@move/core';
import { Route } from '@move/types';

interface PaymentModalProps {
	modalRef(node: Modalize): void;
	routeId: string;
}

interface PaymentButtonProps {
	loading?: boolean;
	onPress?: () => void;
}

const PaymentButton = ({ loading }: PaymentButtonProps) => {
	return (
		<TouchableOpacity activeOpacity={0.5} style={styles.button}>
			{loading ? (
				<ActivityIndicator color='#FFFFFF' />
			) : (
				<Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '500' }}>
					Make trip payment
				</Text>
			)}
		</TouchableOpacity>
	);
};

const PaymentModal = ({ modalRef, routeId }: PaymentModalProps) => {
	const [{ data, error }] = useQuery<{ route: Route }>({
		query: ROUTE,
		variables: { id: routeId }
	});

	if (error) console.log(error);
	if (!data) return null;
	const { route } = data;

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View style={styles.container}>
				<View style={styles.routeContainer}>
					<Text style={styles.routeText}>{route.origin.name}</Text>
					<Text style={{ fontSize: 14, fontWeight: 'bold' }}>TO</Text>
					<Text style={styles.routeText}>{route.destination.name}</Text>
				</View>
				<Text style={styles.paymentInfo}>
					This trip will cost you {route.fare} naira
				</Text>
				<PaymentButton loading />
			</View>
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	routeContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10
	},
	routeText: {
		fontSize: 24,
		color: '#505050'
	},
	paymentInfo: {
		fontSize: 16,
		color: '#428AF5',
		textAlign: 'center'
	},
	button: {
		backgroundColor: '#428AF5',
		borderRadius: 4,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		marginTop: 10
	}
});

export default PaymentModal;
