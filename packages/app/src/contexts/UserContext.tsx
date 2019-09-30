import React from 'react';
import { User } from '@move/core';
import { getUserData, removeUserData } from '../helpers';

interface UserContextValue {
	user: User | null;
	logOut(): void;
}

export const UserContext = React.createContext<UserContextValue | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<User | null>(null);

	const fetchUser = async () => {
		const userData = await getUserData();
		setUser(userData);
	};

	const logOut = async () => {
		await removeUserData();
		return setUser(null);
	};

	React.useEffect(() => {
		fetchUser();
	}, []);

	return <UserContext.Provider value={{ user, logOut }} {...{ children }} />;
};
