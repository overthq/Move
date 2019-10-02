import React from 'react';
import {
	View,
	Text,
	ScrollView,
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

	React.useEffect(() => {
		if (!fetching && data && data.purchaseTicket) {
			modalRef.current && modalRef.current.close();
		}
	}, [data, fetching]);

	const handleSubmit = () => {
		if (origin && destination && userId) {
			return purchasePass({ origin, destination, userId });
		}
	};

	return (
		<Modalize
			ref={modalRef}
			adjustToContentHeight
			scrollViewProps={{
				showsVerticalScrollIndicator: false,
				stickyHeaderIndices: [0]
			}}
		>
			<View style={styles.container} key='0'>
				<Text style={styles.modalTitle}>Purchase a pass</Text>
				<Text style={styles.modalDescription}>
					Select the origin and destination bus stops, and the number of units
					you wish to purchase.
				</Text>
			</View>
			<ScrollView style={styles.container} key='1'>
				<BusStopPicker activeValue={origin} setActive={setOrigin} />
				<BusStopPicker activeValue={destination} setActive={setDestination} />
				<PurchaseButton onPress={handleSubmit} loading={fetching} />
			</ScrollView>
		</Modalize>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#161616'
	},
	modalDescription: {
		fontSize: 16,
		color: '#D3D3D3'
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
