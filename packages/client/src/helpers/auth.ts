import { AsyncStorage, Alert } from 'react-native';

export const saveAuthData = async (): Promise<void> => {
	try {
	} catch (error) {}
};

export const getAuthStatus = async (): Promise<void> => {
	try {
		await AsyncStorage.multiGet(['']);
	} catch (error) {
		Alert.alert(error.message);
	}
};

export const clearAuthData = async (): Promise<void> => {
	try {
		await AsyncStorage.clear();
	} catch (error) {
		Alert.alert(error.message);
	}
};
