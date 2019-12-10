import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRegisterMutation } from '@move/core';
import styles from './styles';

const Register = () => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [{ data }, execute] = useRegisterMutation();
	const { navigate } = useNavigation();

	React.useEffect(() => {
		if (data && data.register) {
			navigate('VerifyCode', { phoneNumber });
		}
	}, [data]);

	const handleSubmit = () => execute({ firstName, lastName, phoneNumber });

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.title}>Create an account</Text>
			<TextInput
				style={styles.input}
				placeholder='Your first name'
				onChangeText={setFirstName}
			/>
			<TextInput
				style={styles.input}
				placeholder='Your last name'
				onChangeText={setLastName}
			/>
			<TextInput
				style={styles.input}
				placeholder='Your phone number'
				onChangeText={setPhoneNumber}
				keyboardType='number-pad'
			/>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.button}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Submit</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Register;
