import { createStackNavigator } from 'react-navigation';

import { Name } from './screens';

const Register = createStackNavigator(
	{ Name },
	{
		headerMode: 'none'
	}
);

export default Register;
