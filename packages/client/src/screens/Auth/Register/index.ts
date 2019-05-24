import { createStackNavigator } from 'react-navigation';

import { Name, Email } from './screens';

const Register = createStackNavigator(
	{ Name, Email },
	{
		headerMode: 'none'
	}
);

export default Register;
