import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useMutation } from 'urql';
import { AUTH_LOGIN } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';
import { User } from '@move/types';

const Login = ({ navigation }: NavigationScreenProps) => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [res, execute] = useMutation<{ verifyCode: User }>(AUTH_LOGIN);

	const handleTextChange = (text: string) => setPhoneNumber(text);
	const goToRegister = () => navigation.navigate('Register');

	const handleSubmit = async () => {
		await execute({ phoneNumber });
		if (res && res.data) {
			// console.log(res.data);
			console.log(phoneNumber);
			navigation.navigate('VerifyCode', { phoneNumber });
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text>Your phone number</Text>
			<TextInput
				style={styles.input}
				placeholder='Your phone number'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity onPress={handleSubmit}>
				<Text>Next</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={goToRegister}>
				<Text>{`Don't have an account?`}</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Login;
