import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home, Auth } from './screens';
import { getUserData } from '@move/core';
import NavigationService from './NavigationService';
import prepare from './prepare';

const Root = () => {
	const [loggedIn, setLoggedIn] = React.useState(false);

	React.useEffect(() => {
		checkAuthState();
		prepare();
	}, []);

	const checkAuthState = async () => {
		const user = await getUserData();
		setLoggedIn(!!user);
	};

	const AppNavigator = createAppContainer(
		createSwitchNavigator(
			{ Home, Auth },
			{ initialRouteName: loggedIn ? 'Home' : 'Auth', backBehavior: 'none' }
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
