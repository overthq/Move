import {
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator
} from 'react-navigation';

import Onboarding from './Onboarding';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Auth = createStackNavigator({ Login, Register }, { headerMode: 'none' });

const createRootNavigator = (authenticated: boolean) => {
	return createAppContainer(
		createSwitchNavigator(
			{ Onboarding, Auth },
			{ initialRouteName: authenticated ? 'Main' : 'Onboarding' }
		)
	);
};

export default createRootNavigator;
