import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useLoginMutation } from '@move/core';
import styles from './styles';

const Login = () => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [{ data }, execute] = useLoginMutation();
	const { navigate } = useNavigation();

	const goToRegister = () => navigate('Register');

	React.useEffect(() => {
		if (data && data.login) {
			navigate('VerifyCode', { phoneNumber });
		}
	}, [data]);

	const handleSubmit = () => execute({ phoneNumber });

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.title}>Your phone number</Text>
			<TextInput
				style={styles.input}
				placeholder='Your phone number'
				onChangeText={setPhoneNumber}
				keyboardType='number-pad'
			/>
			<TouchableOpacity
				activeOpacity={0.7}
				style={[styles.button, { marginBottom: 10 }]}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Next</Text>
			</TouchableOpacity>
			<TouchableOpacity activeOpacity={0.7} onPress={goToRegister}>
				<Text>{`Don't have an account?`}</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Login;
