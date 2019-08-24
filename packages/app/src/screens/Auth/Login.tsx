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
		await executeMutation({ input: { phoneNumber } });
		if (res.error && res.error.message) console.log(res.error.message);
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput
				placeholder='Your phone number'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity onPress={handleSubmit}>
				<Text>Next</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
