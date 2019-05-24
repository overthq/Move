import { createStackNavigator } from 'react-navigation';

import { Name, Email, Password } from './screens';

const Register = createStackNavigator(
	{ Name, Email, Password },
	{
		headerMode: 'none'
	}
);

export default Register;
