import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import PaymentModal from '../components/PaymentModal';

const { height, width } = Dimensions.get('window');

const Home = () => {
	const modalRef = React.useRef<Modalize>(null);

	const handleBarcodeScanned = ({ data }) => {
		// Actually use the data to open the next page with the data fetched from the server
		console.log(data);
		modalRef && modalRef.current.open();
	};

	return (
		<View style={{ flex: 1 }}>
			<Camera
				type={Camera.Constants.Type.Back}
				onBarcodeScanned={handleBarcodeScanned}
				style={styles.camera}
			/>
			<PaymentModal {...{ modalRef }} />
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
