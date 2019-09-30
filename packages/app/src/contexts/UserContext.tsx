import React from 'react';
import { AppLoading } from 'expo';
import { User } from '@move/core';
import { getUserData, removeUserData } from '../helpers';

interface UserContextValue {
	user: User | null;
	logOut(): void;
}

export const UserContext = React.createContext<UserContextValue | null>(null);

const Provider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = React.useState(true);
	const [user, setUser] = React.useState<User | null>(null);

	const fetchUser = async () => {
		setUser(await getUserData());
		setLoading(false);
	};

	React.useEffect(() => {
		fetchUser();
	}, []);

	const logOut = React.useCallback(async () => {
		await removeUserData();
		return setUser(null);
	}, [setUser]);

	return (
		<UserContext.Provider value={{ user, logOut }}>
			{loading ? <AppLoading /> : children}
		</UserContext.Provider>
	);
};

export const UserProvider = React.memo(Provider);
