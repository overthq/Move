import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack';
import Home from './Home';
import Scanner from './Scanner';
import Auth from './Auth';
import { UserContext } from '../contexts/UserContext';
import { Platform } from 'react-native';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const Main = () => (
	<MainStack.Navigator
		headerMode='none'
		mode='modal'
		screenOptions={{
			gestureEnabled: true,
			cardOverlayEnabled: true,
			...(Platform.OS === 'ios'
				? TransitionPresets.ModalPresentationIOS
				: TransitionPresets.RevealFromBottomAndroid)
		}}
	>
		<MainStack.Screen name='Home' component={Home} />
		<MainStack.Screen name='Scanner' component={Scanner} />
	</MainStack.Navigator>
);

const AppNavigator: React.FC = () => {
	const { user } = React.useContext(UserContext);

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={!!user ? 'Main' : 'Auth'}
				headerMode='none'
			>
				<Stack.Screen name='Auth' component={Auth} />
				<Stack.Screen name='Main' component={Main} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
