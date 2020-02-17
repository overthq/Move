import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
	createStackNavigator,
	TransitionPresets
} from '@react-navigation/stack';
import { User } from '@move/core';
import Home from './Home';
import Scanner from './Scanner';
import Auth from './Auth';
import { UserContext } from '../contexts/UserContext';
import ConfirmPayment from '../components/ConfirmPaymentModal';

export type MainStackParamList = {
	Home: { user: User };
	Scanner: undefined;
	ConfirmPayment: { userId: string; routeId?: string };
};

const Stack = createStackNavigator();
const MainStack = createStackNavigator<MainStackParamList>();

const Main = () => {
	const { user } = React.useContext(UserContext);

	return (
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
			<MainStack.Screen
				name='Home'
				component={Home}
				initialParams={{ user: user }}
			/>
			<MainStack.Screen name='Scanner' component={Scanner} />
			<MainStack.Screen
				name='ConfirmPayment'
				component={ConfirmPayment}
				initialParams={{ userId: user._id }}
			/>
		</MainStack.Navigator>
	);
};

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
