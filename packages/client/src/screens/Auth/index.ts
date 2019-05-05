import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Register from './Register';

const AuthNavigator = createStackNavigator({ Login, Register });

export default AuthNavigator;
