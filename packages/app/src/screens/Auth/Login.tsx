import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useLoginMutation } from '@move/core';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

interface LoginProps {
	navigation: StackNavigationProp<any>;
}

const Login = ({ navigation }: LoginProps) => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [{ data }, execute] = useLoginMutation();

	const handleTextChange = (text: string) => setPhoneNumber(text);
	const goToRegister = () => navigation.navigate('Register');

	const handleSubmit = React.useCallback(async () => {
		if (data && data.login)
			return navigation.navigate('VerifyCode', { phoneNumber });
		// Handle errors
		return execute({ phoneNumber });
	}, [phoneNumber, execute, data]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.title}>Your phone number</Text>
			<TextInput
				style={styles.input}
				placeholder='Your phone number'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity
				activeOpacity={0.7}
				style={[styles.button, { marginBottom: 10 }]}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Next</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} onPress={goToRegister}>
				<Text style={styles.linkButtonText}>{`Don't have an account?`}</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Login;
