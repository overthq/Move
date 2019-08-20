import { createSwitchNavigator } from 'react-navigation';
import { Home } from './screens';
import { getUserData } from '@move/core';

const user = getUserData();

const RootNavigator = createSwitchNavigator(
	{ Home },
	{ initialRouteName: user ? 'Home' : 'Auth' }
);

export default RootNavigator;
