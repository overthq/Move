import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Settings from './Settings';
import Purchase from './Purchase';

const Main = createStackNavigator(
	{ Home, Settings, Purchase },
	{
		headerMode: 'none',
		mode: 'modal'
	}
);

export default Main;
