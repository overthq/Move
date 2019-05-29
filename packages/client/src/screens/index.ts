import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Onboarding from './Onboarding';
import Auth from './Auth';
import Main from './Main';

const createRootNavigator = (authenticated: boolean) => {
	return createAppContainer(
		createSwitchNavigator(
			{ Onboarding, Auth, Main },
			{ initialRouteName: authenticated ? 'Main' : 'Onboarding' }
		)
	);
};

export default createRootNavigator;
