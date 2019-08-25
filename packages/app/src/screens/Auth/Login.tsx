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

const Login = ({ navigation }: NavigationScreenProps) => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [res, executeMutation] = useMutation(AUTH_LOGIN);

	const handleTextChange = (text: string) => {
		setPhoneNumber(text);
	};

	const handleSubmit = React.useCallback(async () => {
		await executeMutation({ phoneNumber });
		if (res && res.data) {
			console.log(res.data);
			navigation.navigate('VerifyCode', { phoneNumber });
		}
	}, [executeMutation, res]);

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
		</KeyboardAvoidingView>
	);
};

export default Login;
