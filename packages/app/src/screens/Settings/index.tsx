import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsHome from './Settings';
import CreditCards from './CreditCards';

const SettingsStack = createStackNavigator();

const Settings = () => (
	<SettingsStack.Navigator>
		<SettingsStack.Screen
			name='Settings'
			component={SettingsHome}
			options={{ title: 'Settings' }}
		/>
		<SettingsStack.Screen
			name='CreditCards'
			component={CreditCards}
			options={{ title: 'Credit Cards' }}
		/>
	</SettingsStack.Navigator>
);

export default Settings;
