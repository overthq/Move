import { AsyncStorage } from 'react-native';
import { User } from '@move/core';

export const storeUserData = (user: User) => {
	return AsyncStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = async () => {
	try {
		const saved = await AsyncStorage.getItem('user');
		if (!saved) return;
		const user: User = JSON.parse(saved);
		return user;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const removeUserData = () => {
	return AsyncStorage.removeItem('user');
};
