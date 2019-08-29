import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Modalize from 'react-native-modalize';
import { Camera } from 'expo-camera';
import PaymentModal from '../components/PaymentModal';
import { BarCodeScanningResult } from 'expo-camera/build/Camera.types';

const { height, width } = Dimensions.get('window');

const Home = () => {
	const [routeId, setRouteId] = React.useState('');
	const modalRef = React.useRef<Modalize>(null);

	const handleBarCodeScanned = ({ data }: BarCodeScanningResult) => {
		setRouteId(data);
		modalRef && modalRef.current.open();
	};

	return (
		<View style={{ flex: 1 }}>
			<Camera
				type={Camera.Constants.Type.Back}
				onBarCodeScanned={handleBarCodeScanned}
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
