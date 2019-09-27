import React from 'react';
import {
	View,
	Text,
	Picker,
	ActivityIndicator,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import Modalize from 'react-native-modalize';
import { usePurchaseTicketMutation, useBusStopsQuery } from '@move/core';

interface PurchasePassModalProps {
	userId: string;
	modalRef: React.RefObject<Modalize>;
}

interface PurchaseButtonProps {
	onPress(): void;
	loading: boolean;
}

const PurchaseButton = ({ onPress, loading }: PurchaseButtonProps) => (
	<TouchableOpacity style={styles.modalButton} {...{ onPress }}>
		{loading ? (
			<ActivityIndicator />
		) : (
			<Text style={styles.modalButtonText}>Purchase Pass</Text>
		)}
	</TouchableOpacity>
);

interface BusStopPickerProps {
	activeValue: string;
	setActive: (value: string) => void;
}

const BusStopPicker = ({ activeValue, setActive }: BusStopPickerProps) => {
	const [{ fetching, data }] = useBusStopsQuery();
	if (fetching) return <ActivityIndicator />;
	if (!data || !data.busStops) return null;
	const { busStops } = data;

	return (
		<Picker selectedValue={activeValue} onValueChange={setActive}>
			{busStops.map(({ _id, name }) => (
				<Picker.Item key={_id} label={name} value={_id} />
			))}
		</Picker>
	);
};

const PurchasePassModal = ({ userId, modalRef }: PurchasePassModalProps) => {
	const [{ data, fetching }, purchasePass] = usePurchaseTicketMutation();
	const [origin, setOrigin] = React.useState('');
	const [destination, setDestination] = React.useState('');

	const handleSubmit = React.useCallback(() => {
		if (data && data.purchaseTicket) {
			return console.log('Ticket purchased.');
			// Close the modal and show some form of confirmation.
		}
		if (origin && destination && userId) {
			return purchasePass({ origin, destination, userId });
		}
	}, [data, purchasePass, origin, destination, userId]);

	return (
		<Modalize ref={modalRef} handlePosition='inside' adjustToContentHeight>
			<View style={styles.container}>
				<Text style={styles.modalTitle}>Purchase a pass</Text>
				{/* Quick purchase - passes based on learned data from the user's past purchases passes or location. */}
				<BusStopPicker activeValue={origin} setActive={setOrigin} />
				<BusStopPicker activeValue={destination} setActive={setDestination} />
				<PurchaseButton onPress={handleSubmit} loading={fetching} />
			</View>
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#161616'
	},
	modalButton: {
		width: '100%',
		height: 35,
		borderRadius: 4,
		backgroundColor: '#161616',
		justifyContent: 'center',
		alignItems: 'center'
	},
	modalButtonText: {
		fontWeight: '500',
		fontSize: 16,
		color: '#FFFFFF'
	}
});

export default PurchasePassModal;
