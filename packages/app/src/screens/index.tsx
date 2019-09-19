import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './Home';
import Settings from './Settings';
import Auth from './Auth';
import NavigationService from './NavigationService';
import {
	createStackNavigator,
	TransitionPresets
} from 'react-navigation-stack';

const Main = createStackNavigator(
	{ Home, Settings },
	{
		mode: 'modal',
		headerMode: 'none',
		defaultNavigationOptions: {
			...(Platform.OS === 'ios'
				? TransitionPresets.ModalPresentationIOS
				: TransitionPresets.RevealFromBottomAndroid),
			gestureEnabled: true,
			cardOverlayEnabled: true
		}
	}
);

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
