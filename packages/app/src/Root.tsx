import React from 'react';
import prepare from './prepare';
import AppNavigator from './screens';

const Root = () => {
	React.useEffect(() => {
		prepare();
	}, []);

	return <AppNavigator />;
};

export default Root;
