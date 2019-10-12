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
import Accordion from 'react-native-collapsible/Accordion';
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

interface ModalSection {
	title: string;
	activeValue: string;
	setActive: (value: string) => void;
}

const BusStopPicker = ({
	activeValue,
	setActive
}: Omit<ModalSection, 'title'>) => {
	const [{ fetching, data }] = useBusStopsQuery();
	if (fetching) return <ActivityIndicator />;
	if (!data || !data.busStops) return null;
	const { busStops } = data;

	return (
		<Picker
			selectedValue={activeValue}
			onValueChange={value => setActive(value)}
		>
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
	const [activeSections, setActiveSections] = React.useState([]);

	const sections: ModalSection[] = [
		{
			title: 'ORIGIN',
			activeValue: origin,
			setActive: setOrigin
		},
		{
			title: 'DESTINATION',
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
				<Accordion
					sections={sections}
					activeSections={activeSections}
					onChange={setActiveSections}
					renderHeader={({ title }) => (
						<Text style={styles.modalPickerTitle}>{title}</Text>
					)}
					renderContent={({ title, activeValue, setActive }) => (
						<BusStopPicker {...{ title, activeValue, setActive }} />
					)}
				/>
			</ScrollView>
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
	modalPickerTitle: {
		fontWeight: '500',
		color: '#505050'
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
