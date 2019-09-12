import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
import Auth from './Auth';
import NavigationService from './NavigationService';
import { createStackNavigator } from 'react-navigation-stack';

const Main = createStackNavigator({ Home, Settings }, { headerMode: 'none' });

const AppNavigator = ({ loggedIn }: { loggedIn: boolean }) => {
	const Navigator = createAppContainer(
		createSwitchNavigator(
			{ Auth, Main },
			{ initialRouteName: loggedIn ? 'Main' : 'Auth', backBehavior: 'none' }
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
