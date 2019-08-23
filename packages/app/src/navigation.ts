import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home, Auth } from './screens';
import { getUserData } from '@move/core';
import prepare from './prepare';

// Should this be in a component?
// Not sure if this actually helps with memoization
const user = getUserData();
prepare();

const RootNavigator = createAppContainer(
	createSwitchNavigator(
		{ Home, Auth },
		{ initialRouteName: user ? 'Home' : 'Auth' }
	)
);

export default RootNavigator;
