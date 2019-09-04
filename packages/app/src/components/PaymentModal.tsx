import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	StyleSheet,
	Dimensions
} from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useQuery } from 'urql';
import { ROUTE } from '@move/core';
import { Route } from '@move/types';

const { height } = Dimensions.get('window');

interface PaymentButtonProps {
	loading?: boolean;
	onPress?: () => void;
}

const PaymentButton = ({ loading }: PaymentButtonProps) => (
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

const PaymentInfo = ({ routeId }: { routeId: string }) => {
	const [{ data, error }] = useQuery<{ route: Route }>({
		query: ROUTE,
		variables: { id: routeId }
	});

	if (error) console.log(error);
	if (!data) return null;
	const { route } = data;

	return (
		<View style={styles.container}>
			<Text style={styles.routeText}>
				{route.origin.name} to {route.destination.name}
			</Text>
			<Text style={styles.paymentInfo}>
				This trip will cost you {route.fare} naira
			</Text>
			<PaymentButton loading />
		</View>
	);
};

interface PaymentModalProps {
	modalRef: React.RefObject<Modalize>;
}

const PaymentModal = ({ modalRef }: PaymentModalProps) => {
	const [routeId, setRouteId] = React.useState('');
	const handleBarCodeScanned = ({ data }: { data: string }) => {
		setRouteId(data);
	};

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			{routeId ? (
				<PaymentInfo {...{ routeId }} />
			) : (
				<BarCodeScanner
					onBarCodeScanned={handleBarCodeScanned}
					style={{ height: 0.7 * height, width: '100%' }}
				/>
			)}
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 15,
		height: 0.7 * height
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
