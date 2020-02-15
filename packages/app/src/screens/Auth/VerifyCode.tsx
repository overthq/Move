import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { useVerifyCodeMutation } from '@move/core';
import { UserContext } from '../../contexts/UserContext';
import styles from './styles';
import { storeUserData } from '../../helpers';

const VerifyCode = () => {
	const { params } = useRoute();
	const { navigate } = useNavigation();
	const [code, setCode] = React.useState('');
	const { setUser } = React.useContext(UserContext);
	const [{ data }, executeMutation] = useVerifyCodeMutation();
	const { phoneNumber } = params as { phoneNumber: string };

	React.useEffect(() => {
		if (data?.verifyCode) {
			storeUserData(data.verifyCode);
			setUser(data.verifyCode);
			navigate('Main');
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
				onChangeText={setCode}
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
