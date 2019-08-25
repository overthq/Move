import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { Context, createRequest } from 'urql';
import { NavigationScreenProps } from 'react-navigation';
import { AUTH_VERIFY_CODE } from '@move/core';
import styles from './styles';

const VerifyCode = ({ navigation }: NavigationScreenProps) => {
	const [code, setCode] = React.useState('');
	const client = React.useContext(Context);

	const handleTextChange = (text: string) => setCode(text);

	const handleSubmit = async () => {
		const phoneNumber: string = navigation.getParam('phoneNumber', '');
		const request = createRequest(AUTH_VERIFY_CODE, { phoneNumber, code });
		await client.executeQuery(request);
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
