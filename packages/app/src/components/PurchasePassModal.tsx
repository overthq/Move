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
import Accordion from 'react-native-collapsible/Accordion';
import { Feather } from '@expo/vector-icons';
import {
	usePurchaseTicketMutation,
	useBusStopsQuery,
	BusStop
} from '@move/core';

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
	busStops: BusStop[];
}

const BusStopPicker = ({
	activeValue,
	setActive,
	busStops
}: BusStopPickerProps) => (
	<Picker selectedValue={activeValue} onValueChange={value => setActive(value)}>
		{busStops.map(({ _id, name }) => (
			<Picker.Item key={_id} label={name} value={_id} />
		))}
	</Picker>
);

interface ModalSection {
	title: string;
	activeValue: string;
	setActive: (id: string) => void;
}

const PurchasePassModal = ({ userId, modalRef }: PurchasePassModalProps) => {
	const [{ data, fetching }, purchasePass] = usePurchaseTicketMutation();
	const [{ fetching: loading, data: busStopsData }] = useBusStopsQuery();
	const [origin, setOrigin] = React.useState('');
	const [destination, setDestination] = React.useState('');
	const [activeSections, setActiveSections] = React.useState([]);

	const getBusStopName = (id: string) => {
		const busStop = busStopsData.busStops.find(({ _id }) => id === _id);
		return busStop ? busStop.name : '';
	};

	const sections: ModalSection[] = [
		{
			title: 'Origin',
			activeValue: origin,
			setActive: setOrigin
		},
		{
			title: 'Destination',
			activeValue: destination,
			setActive: setDestination
		}
	];

	React.useEffect(() => {
		if (!fetching && data && data.purchaseTicket) {
			modalRef.current && modalRef.current.close();
		}
	}, [data, fetching]);

	const handleSubmit = () => {
		if (origin && destination && userId && origin !== destination) {
			return purchasePass({ origin, destination, userId });
		}
	};

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View style={styles.container}>
				<Text style={styles.modalTitle}>Purchase a pass</Text>
				<Text style={styles.modalDescription}>
					Select the origin and destination bus stops, and the number of units
					you wish to purchase.
				</Text>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<Accordion
					sections={sections}
					activeSections={activeSections}
					onChange={setActiveSections}
					underlayColor='transparent'
					renderHeader={({ title, activeValue }, _, isActive) => (
						<View style={styles.modalAccordionHeader}>
							<Text style={styles.modalAccordionTitle}>{title}</Text>
							<View
								style={[styles.modalAccordionHeader, { paddingVertical: 0 }]}
							>
								<Text style={styles.modalAccordionValue}>
									{getBusStopName(activeValue) || 'Select'}
								</Text>
								<Feather
									name={isActive ? 'chevron-down' : 'chevron-up'}
									size={24}
									color='#D3D3D3'
								/>
							</View>
						</View>
					)}
					renderContent={({ activeValue, setActive }) =>
						loading ? (
							<ActivityIndicator />
						) : (
							<BusStopPicker
								{...{ activeValue, setActive, busStops: busStopsData.busStops }}
							/>
						)
					}
				/>
			</View>
			<View style={styles.modalButtonContainer}>
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
		fontSize: 20,
		fontWeight: 'bold',
		color: '#161616',
		marginBottom: 5
	},
	modalDescription: {
		fontSize: 16,
		color: '#CCCCCC'
	},
	modalAccordionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10
	},
	modalAccordionTitle: {
		fontWeight: '500',
		fontSize: 16,
		color: '#161616'
	},
	modalAccordionValue: {
		fontSize: 16,
		color: '#505050',
		marginRight: 15
	},
	modalButtonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
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
