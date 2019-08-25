import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useMutation } from 'urql';
import { NavigationScreenProps } from 'react-navigation';
import { AUTH_VERIFY_CODE } from '@move/core';
import styles from './styles';

const VerifyCode = ({ navigation }: NavigationScreenProps) => {
	const [code, setCode] = React.useState('');
	const [, executeMutation] = useMutation(AUTH_VERIFY_CODE);

	const handleTextChange = (text: string) => setCode(text);

	const handleSubmit = async () => {
		const phoneNumber: string = navigation.getParam('phoneNumber', '');
		await executeMutation({ phoneNumber, code });
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text>Enter your verification Code</Text>
			<TextInput
				style={styles.input}
				placeholder='Verification code'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity onPress={handleSubmit}>
				<Text>Verify Code</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default VerifyCode;
