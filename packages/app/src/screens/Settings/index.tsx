import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsHome from './Settings';
import Cards from './Cards';

const SettingsStack = createStackNavigator();

const Settings = () => (
	<SettingsStack.Navigator headerMode='none'>
		<SettingsStack.Screen name='Settings' component={SettingsHome} />
		<SettingsStack.Screen
			name='Cards'
			component={Cards}
			options={{ title: 'Cards' }}
		/>
	</SettingsStack.Navigator>
);

export default Settings;
