import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Onboarding from './Onboarding';
import Auth from './Auth';
import Main from './Main';

const AppNavigator = createAppContainer(
	createSwitchNavigator(
		{ Onboarding, Auth, Main },
		{ initialRouteName: 'Onboarding' }
	)
);

export default AppNavigator;
