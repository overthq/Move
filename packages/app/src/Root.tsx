import React from 'react';
import prepare from './prepare';
import { UserContext } from './contexts/UserContext';
import AppNavigator from './screens';

const Root = () => {
	const { user } = React.useContext(UserContext);

	React.useEffect(() => {
		prepare();
	}, []);

	return <AppNavigator loggedIn={!!user} />;
};

export default Root;
