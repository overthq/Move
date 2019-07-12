import {
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator
} from 'react-navigation';

import Onboarding from './Onboarding';

import Login from './Auth/Login';
import Register from './Auth/Register';

import Home from './Home';

const Auth = createStackNavigator(
	{ Login, Register },
	{ headerMode: 'none', mode: 'card' }
);

const Main = createStackNavigator(
	{ Home },
	{ headerMode: 'none', cardOverlayEnabled: true, cardShadowEnabled: true }
);

const createRootNavigator = (authenticated: boolean) => {
	return createAppContainer(
		createSwitchNavigator(
			{ Onboarding, Auth, Main },
			{ initialRouteName: authenticated ? 'Main' : 'Onboarding' }
		)
	);
};

export default createRootNavigator;
