import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Register from './Register';
import VerifyCode from './VerifyCode';

const AuthNavigator = createStackNavigator(
	{ Login, Register, VerifyCode },
	{ headerMode: 'none' }
);

export default AuthNavigator;
