import { Alert, StatusBar } from 'react-native';
import * as Permissions from 'expo-permissions';

const prepare = async () => {
	const { status } = await Permissions.askAsync(Permissions.CAMERA);
	if (status !== 'granted') {
		Alert.alert('The camera permission is required to check scan ticket codes');
		prepare();
	}
	StatusBar.setBarStyle('light-content');
};

export default prepare;
