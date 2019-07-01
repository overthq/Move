import { createStackNavigator } from 'react-navigation';

import Name from './Name';
import PhoneNumber from './PhoneNumber';
import Code from './Code';

const Register = createStackNavigator(
	{ Name, PhoneNumber, Code },
	{
		headerMode: 'none'
	}
);

export default Register;
