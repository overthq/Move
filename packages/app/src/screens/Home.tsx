import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Modalize from 'react-native-modalize';
import { BarCodeScanner } from 'expo-barcode-scanner';
import PaymentModal from '../components/PaymentModal';

const { height, width } = Dimensions.get('window');

const Home = () => {
	const [scanned, setScanned] = React.useState(false);
	const [routeId, setRouteId] = React.useState('');
	const modalRef = React.useRef<Modalize>(null);

	const handleBarCodeScanned = ({ data }: { data: string }) => {
		setScanned(true);
		setRouteId(data);
		modalRef.current && modalRef.current.open();
	};

	return (
		<View style={{ flex: 1 }}>
			<BarCodeScanner
				type={BarCodeScanner.Constants.Type.Back}
				barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={styles.camera}
			/>
			<PaymentModal {...{ modalRef, routeId }} />
		</View>
	);
};

const styles = StyleSheet.create({
	camera: {
		height: height / 2,
		width
	}
});

export default Home;
