import { createStackNavigator } from 'react-navigation';

import { Name, PhoneNumber, Code } from './screens';

const Register = createStackNavigator(
	{ Name, PhoneNumber, Code },
	{
		headerMode: 'none'
	}
);

export default Register;
