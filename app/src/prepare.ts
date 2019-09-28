import { StatusBar } from 'react-native';
import Permissions from 'react-native-permissions';

const prepare = async () => {
	const status = await Permissions.check('camera');
	if (status !== 'authorized') {
		await Permissions.request('camera');
		prepare();
	}
	StatusBar.setBarStyle('light-content');
};

export default prepare;
