import { createStackNavigator } from 'react-navigation';

import PhoneNumber from './PhoneNumber';
import Code from './Code';

const Login = createStackNavigator(
	{ PhoneNumber, Code },
	{
		headerMode: 'none'
	}
);

export default Login;
