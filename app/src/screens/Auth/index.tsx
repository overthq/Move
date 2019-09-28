import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import VerifyCode from './VerifyCode';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
	<AuthStack.Navigator headerMode='none'>
		<AuthStack.Screen name='Login' component={Login} />
		<AuthStack.Screen name='Register' component={Register} />
		<AuthStack.Screen name='VerifyCode' component={VerifyCode} />
	</AuthStack.Navigator>
);

export default AuthNavigator;
