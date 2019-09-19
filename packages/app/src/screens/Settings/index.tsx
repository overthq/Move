import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { Feather } from '@expo/vector-icons';
import SettingsHome from './Settings';
import CreditCards from './CreditCards';

const Settings = createStackNavigator(
	{
		Settings: {
			screen: SettingsHome,
			navigationOptions: ({ navigation }) => ({
				title: 'Settings',
				headerLeft: (
					<TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
						<Feather name='x' size={20} color='#D3D3D3' />
					</TouchableWithoutFeedback>
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
				backgroundColor: '#161616',
				borderBottomColor: '#545454'
			}
		}
	}
);

export default Settings;
