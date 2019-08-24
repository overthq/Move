import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useMutation } from 'urql';
import { AUTH_LOGIN } from '@move/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = () => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [res, executeMutation] = useMutation(AUTH_LOGIN);
	const handleTextChange = (text: string) => {
		setPhoneNumber(text);
	};

	const handleSubmit = async () => {
		await executeMutation({ phoneNumber });
		console.log(res);
	};

	return (
		<View style={{ flex: 1 }}>
			<TextInput onChangeText={handleTextChange} />
			<TouchableOpacity onPress={handleSubmit}>
				<Text>Next</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
