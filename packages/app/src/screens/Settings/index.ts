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
		CreditCards
	},
	{ headerMode: 'none' }
);

export default Settings;
