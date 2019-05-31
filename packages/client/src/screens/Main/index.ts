import { createStackNavigator } from 'react-navigation';

import Overview from './Overview';
import Settings from './Settings';
import Purchase from './Purchase';

const Main = createStackNavigator(
	{ Overview, Settings, Purchase },
	{
		headerMode: 'none',
		mode: 'modal'
	}
);

export default Main;
