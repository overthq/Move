import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home, Auth, Settings } from './screens';
import NavigationService from './NavigationService';
import prepare from './prepare';
import { UserContext } from './contexts/UserContext';

const Root = () => {
	const { user } = React.useContext(UserContext);
	React.useEffect(() => {
		prepare();
	}, []);

	const AppNavigator = createAppContainer(
		createSwitchNavigator(
			{ Auth, Home, Settings },
			{ initialRouteName: user ? 'Home' : 'Auth', backBehavior: 'none' }
		)
	);

	return (
		<AppNavigator
			ref={navigatorRef =>
				navigatorRef && NavigationService.setTopLevelNavigator(navigatorRef)
			}
		/>
	);
};

export default Root;
