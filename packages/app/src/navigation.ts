import { createSwitchNavigator } from 'react-navigation';
import { Home } from './screens';
import { getUserData } from '@move/core';
import prepare from './prepare';

// Should this be in a component?
// Not sure if this actually helps with memoization
const user = getUserData();
prepare();

const RootNavigator = createSwitchNavigator(
	{ Home },
	{ initialRouteName: user ? 'Home' : 'Auth' }
);

export default RootNavigator;
