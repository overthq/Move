import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useVerifyCodeMutation } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';
import { storeUserData } from '../../helpers';
import styles from './styles';

const VerifyCode = ({ navigation }: NavigationScreenProps) => {
	const phoneNumber: string = navigation.getParam('phoneNumber');
	const [code, setCode] = React.useState('');
	const [{ data }, executeMutation] = useVerifyCodeMutation();
	const handleTextChange = (text: string) => setCode(text);

	const handleSubmit = React.useCallback(async () => {
		await executeMutation({ phoneNumber, code });
		if (data && data.verifyCode) {
			await storeUserData(data.verifyCode);
			navigation.navigate('Home');
		}
	}, [code, data, executeMutation]);

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
