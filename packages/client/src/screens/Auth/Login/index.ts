import { createStackNavigator } from 'react-navigation';

import { PhoneNumber, Code } from './screens';

const Login = createStackNavigator(
	{ PhoneNumber, Code },
	{
		headerMode: 'none'
	}
);

export default Login;
