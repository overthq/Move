import { createStackNavigator } from 'react-navigation';

import Overview from './Overview';
import Settings from './Settings';

const Main = createStackNavigator(
	{ Overview, Settings },
	{
		headerMode: 'none'
	}
);

export default Main;
