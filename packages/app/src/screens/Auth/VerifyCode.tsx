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
	const [code, setCode] = React.useState('');
	const [res, executeMutation] = useVerifyCodeMutation();
	const handleTextChange = (text: string) => setCode(text);

	const handleSubmit = async () => {
		const phoneNumber: string = await navigation.getParam('phoneNumber');
		await executeMutation({ phoneNumber, code });
		if (res && res.data && res.data.verifyCode) {
			console.log(res.data.verifyCode);
			await storeUserData(res.data.verifyCode);
			navigation.navigate('Home');
		}
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
