import { createStackNavigator } from 'react-navigation-stack';
import SettingsHome from './Settings';
import CreditCards from './CreditCards';

const Settings = createStackNavigator(
	{
		Settings: {
			screen: SettingsHome,
			navigationOptions: {
				title: 'Settings'
			}
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
