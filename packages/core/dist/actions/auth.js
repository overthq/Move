import { AsyncStorage } from 'react-native';
export const storeUserData = (user) => {
    return AsyncStorage.setItem('user', JSON.stringify(user));
};
export const getUserData = async () => {
    try {
        const saved = await AsyncStorage.getItem('user');
        if (!saved)
            throw new Error('User not authenticated');
        const user = JSON.parse(saved);
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
};
//# sourceMappingURL=auth.js.map