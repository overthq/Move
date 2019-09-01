import { AsyncStorage } from 'react-native';
import { User } from '@move/types';

export const storeUserData = (user: User) => {
	console.log(user);
	return AsyncStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = async () => {
	try {
		const saved = await AsyncStorage.getItem('user');
		console.log(saved);
		if (!saved) return;
		const user: User = JSON.parse(saved);
		return user;
	} catch (error) {
		throw new Error(error.message);
	}
};
