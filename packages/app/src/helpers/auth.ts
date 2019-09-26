import AsyncStorage from '@react-native-community/async-storage';
import { User } from '@move/core';

export const storeUserData = (user: User) => {
	console.log('Saving user', user);
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

export const removeUserData = () => AsyncStorage.removeItem('user');
