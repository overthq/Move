import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useVerifyCodeMutation } from '@move/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';
import { storeUserData } from '../../helpers';

interface VerifyCodeProps {
	route: any;
	navigation: StackNavigationProp<any>;
}

const VerifyCode = ({ route, navigation }: VerifyCodeProps) => {
	const { phoneNumber } = route.params;
	const [code, setCode] = React.useState('');
	const { setUser } = React.useContext(UserContext);
	const [{ data }, executeMutation] = useVerifyCodeMutation();
	const handleTextChange = (text: string) => setCode(text);

	React.useEffect(() => {
		if (data && data.verifyCode) {
			storeUserData(data.verifyCode);
			setUser(data.verifyCode);
			navigation.navigate('Main');
		}
	}, [data]);

	const handleSubmit = () => {
		if (phoneNumber && code) {
			executeMutation({ phoneNumber, code });
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.title}>Enter your verification code</Text>
			<TextInput
				style={styles.input}
				placeholder='Your verification code'
				onChangeText={handleTextChange}
				keyboardType='number-pad'
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
