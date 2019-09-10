import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useLoginMutation } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';

const Login = ({ navigation }: NavigationScreenProps) => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [{ data }, execute] = useLoginMutation();

	const handleTextChange = (text: string) => setPhoneNumber(text);
	const goToRegister = () => navigation.navigate('Register');

	const handleSubmit = React.useCallback(async () => {
		await execute({ phoneNumber });
		if (data && data.login) navigation.navigate('VerifyCode', { phoneNumber });
	}, [phoneNumber, execute, data]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.title}>Your phone number</Text>
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
