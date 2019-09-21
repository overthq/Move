import React from 'react';
import { Platform } from 'react-native';
import Home from './Home';
import Settings from './Settings';
import Auth from './Auth';
import { NavigationNativeContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const AppNavigator = ({ loggedIn }: { loggedIn: boolean }) => (
	<NavigationNativeContainer>
		<Stack.Navigator
			initialRouteName={loggedIn ? 'Main' : 'Auth'}
			headerMode='none'
		>
			<Stack.Screen name='Auth' component={Auth} />
			<Stack.Screen name='Main'>
				{() => (
					<MainStack.Navigator
						mode='modal'
						headerMode='none'
						screenOptions={{
							...(Platform.OS === 'ios'
								? TransitionPresets.ModalPresentationIOS
								: TransitionPresets.RevealFromBottomAndroid),
							gestureEnabled: true,
							cardOverlayEnabled: true
						}}
					>
						<MainStack.Screen name='Home' component={Home} />
						<MainStack.Screen name='Settings' component={Settings} />
					</MainStack.Navigator>
				)}
			</Stack.Screen>
		</Stack.Navigator>
	</NavigationNativeContainer>
);

export default AppNavigator;
