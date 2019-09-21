import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useVerifyCodeMutation } from '@move/core';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { storeUserData } from '../../helpers';
import styles from './styles';

interface VerifyCodeProps {
	route: RouteProp<any, any>;
	navigation: StackNavigationProp<any>;
}

const VerifyCode = ({ route, navigation }: VerifyCodeProps) => {
	const { phoneNumber } = route.params as any;
	const [code, setCode] = React.useState('');
	const [{ data }, executeMutation] = useVerifyCodeMutation();
	const handleTextChange = (text: string) => setCode(text);

	const handleSubmit = React.useCallback(async () => {
		if (data && data.verifyCode) {
			await storeUserData(data.verifyCode);
			return navigation.navigate('Home');
		}
		return executeMutation({ phoneNumber, code });
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
