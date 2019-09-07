import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Home';
// import Settings from './Settings';
import Auth from './Auth';
import NavigationService from './NavigationService';

const AppNavigator = ({ loggedIn }: { loggedIn: boolean }) => {
	const Navigator = createAppContainer(
		createSwitchNavigator(
			{ Auth, Home },
			{ initialRouteName: loggedIn ? 'Home' : 'Auth', backBehavior: 'none' }
		)
	);

	return (
		<Navigator
			ref={navigatorRef =>
				navigatorRef && NavigationService.setTopLevelNavigator(navigatorRef)
			}
		/>
	);
};

export default AppNavigator;
