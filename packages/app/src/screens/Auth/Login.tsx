import React from 'react';
import { View, TextInput } from 'react-native';

const Login = () => {
	const [phoneNumber, setPhoneNumber] = React.useState('');

	const handleTextChange = (text: string) => {
		setPhoneNumber(text);
	};

	return (
		<View style={{ flex: 1 }}>
			<TextInput onChangeText={handleTextChange} />
		</View>
	);
};

export default Login;
