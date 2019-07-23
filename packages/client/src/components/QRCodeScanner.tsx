import React from 'react';
import { Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { NavigationScreenProps } from 'react-navigation';
import { withNavigation } from 'react-navigation';

const QRCodeScanner = ({ navigation }: NavigationScreenProps) => {
	const camera = React.useRef(null);

	const handleBarCodeRead = (rawData?: string) => {
		if (!rawData) return;
		try {
			// Call API endpoint with the data
			return navigation.navigate('Confirm');
		} catch (error) {
			return Alert.alert(error.message);
		}
	};

	return (
		<RNCamera
			ref={camera}
			onBarCodeRead={({ rawData }) => handleBarCodeRead(rawData)}
			style={{ borderRadius: 4 }}
		/>
	);
};

export default withNavigation(QRCodeScanner);
