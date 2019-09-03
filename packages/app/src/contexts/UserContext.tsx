import React from 'react';
import { User } from '@move/types';
import { getUserData } from '../helpers';

export const UserContext = React.createContext<User | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<User | null>(null);

	React.useEffect(() => {
		const fetchUser = async () => {
			const userData = await getUserData();
			setUser(userData);
		};
		fetchUser();
	}, []);

	if (!user) return null;

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
