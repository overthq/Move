import { createBottomTabNavigator } from 'react-navigation';

import Overview from './Overview';
import Account from './Account';

const MainNavigator = createBottomTabNavigator({ Overview, Account });

export default MainNavigator;
