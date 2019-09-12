import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import SettingsHome from './Settings';
import CreditCards from './CreditCards';
import { StatusBar } from 'react-native';

const HeaderClose = ({ onPress }: { onPress(): void }) => (
	<Feather name='x' size={18} color='#D3D3D3' {...{ onPress }} />
);

const Settings = createStackNavigator(
	{
		Settings: {
			screen: SettingsHome,
			navigationOptions: ({ navigation }) => ({
				title: 'Settings',
				// eslint-disable-next-line
				headerLeft: () => (
					<>
						<StatusBar barStyle='light-content' animated />
						<HeaderClose onPress={() => navigation.goBack()} />
					</>
				),
				headerLeftContainerStyle: {
					paddingHorizontal: 10
				}
			})
		},
		CreditCards: {
			screen: CreditCards,
			navigationOptions: {
				title: 'Credit Cards'
			}
		}
	},
	{
		defaultNavigationOptions: {
			headerTitleStyle: {
				color: '#D3D3D3'
			},
			headerStyle: {
				backgroundColor: '#161616'
			}
		}
	}
);

export default Settings;
