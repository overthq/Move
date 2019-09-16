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
import {
	usePurchaseTicketMutation,
	useBusStopsQuery,
	BusStopsQuery
} from '@move/core';

interface PurchasePassModalProps {
	userId: string;
	modalRef: React.RefObject<Modalize>;
}

const PurchaseButton = ({
	onPress,
	loading
}: {
	onPress(): void;
	loading: boolean;
}) => (
	<TouchableOpacity style={styles.modalButton} {...{ onPress }}>
		{loading ? (
			<ActivityIndicator />
		) : (
			<Text style={styles.modalButtonText}>Purchase Pass</Text>
		)}
	</TouchableOpacity>
);

interface BusStopPickerProps {
	busStops: BusStopsQuery['busStops'];
	activeValue: string;
	setActive: (value: string) => void;
}

const BusStopPicker = ({
	busStops,
	activeValue,
	setActive
}: BusStopPickerProps) => (
	<Picker selectedValue={activeValue} onValueChange={value => setActive(value)}>
		{busStops.map(({ _id, name }) => (
			<Picker.Item key={_id} label={name} value={_id} />
		))}
	</Picker>
);

const PurchasePassModal = ({ userId, modalRef }: PurchasePassModalProps) => {
	const [{ fetching, data }] = useBusStopsQuery();
	const [
		{ data: purchaseData, fetching: loading },
		purchasePass
	] = usePurchaseTicketMutation();
	const [origin, setOrigin] = React.useState('');
	const [destination, setDestination] = React.useState('');

	const handleSubmit = React.useCallback(() => {
		console.log(origin, destination);
		if (purchaseData && purchaseData.purchaseTicket) {
			console.log('Ticket purchased.');
		}
		return purchasePass({ origin, destination, userId });
	}, [purchaseData, purchasePass, origin, destination, userId]);

	if (fetching) return <ActivityIndicator />;
	if (!data || !data.busStops) return null;

	return (
		<Modalize ref={modalRef} handlePosition='inside' adjustToContentHeight>
			<View style={styles.container}>
				<Text style={styles.modalTitle}>Purchase a pass</Text>
				{/* Quick purchase - passes based on learned data from the user's past purchases passes or location. */}
				<BusStopPicker
					activeValue={origin}
					setActive={setOrigin}
					busStops={data.busStops}
				/>
				<BusStopPicker
					activeValue={destination}
					setActive={setDestination}
					busStops={data.busStops}
				/>
				<PurchaseButton onPress={handleSubmit} {...{ loading }} />
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
		fontSize: 15,
		color: '#D3D3D3'
	}
});

export default PurchasePassModal;
