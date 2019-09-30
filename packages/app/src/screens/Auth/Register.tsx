import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useRegisterMutation } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';

const Register = ({ navigation }: NavigationScreenProps) => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [{ data }, execute] = useRegisterMutation();

	const handleTextChange = (text: string) => {
		setPhoneNumber(text);
	};

	const handleSubmit = React.useCallback(async () => {
		if (data && data.register) {
			return navigation.navigate('VerifyCode', { phoneNumber });
		}
		return execute({ firstName, lastName, phoneNumber });
	}, [firstName, lastName, phoneNumber, data, execute]);

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text>Your phone number</Text>
			<TextInput
				style={styles.input}
				placeholder='Your first name'
				onChangeText={text => setFirstName(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Your last name'
				onChangeText={text => setLastName(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder='Your phone number'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity onPress={handleSubmit}>
				<Text>Submit</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

export default Register;
