import { createStackNavigator } from 'react-navigation-stack';
import SettingsHome from './Settings';
import CreditCards from './CreditCards';

const Settings = createStackNavigator({
	Settings: SettingsHome,
	CreditCards
});

export default Settings;
