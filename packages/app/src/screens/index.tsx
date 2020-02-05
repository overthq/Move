import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Auth from './Auth';

const Stack = createStackNavigator();

const AppNavigator: React.FC<{ loggedIn: boolean }> = ({ loggedIn }) => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName={loggedIn ? 'Home' : 'Auth'}
			headerMode='none'
		>
			<Stack.Screen name='Auth' component={Auth} />
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default AppNavigator;
