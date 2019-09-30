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
	const { phoneNumber } = route.params;
	const [code, setCode] = React.useState('');
	const [{ data }, executeMutation] = useVerifyCodeMutation();
	const handleTextChange = (text: string) => setCode(text);

	const handleSubmit = React.useCallback(async () => {
		await executeMutation({ phoneNumber, code });
		if (data && data.verifyCode) {
			await storeUserData(data.verifyCode);
		}
		return navigation.navigate('Main');
	}, [data]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.title}>Enter your verification code</Text>
			<TextInput
				style={styles.input}
				placeholder='Your verification code'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.button}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Verify Code</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default VerifyCode;
