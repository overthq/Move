import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useMutation } from 'urql';
import { AUTH_REGISTER } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';
import styles from './styles';
import { User } from '@move/types';

const Register = ({ navigation }: NavigationScreenProps) => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [res, execute] = useMutation<{ register: User }>(AUTH_REGISTER);

	const handleTextChange = (text: string) => {
		setPhoneNumber(text);
	};

	const handleSubmit = async () => {
		await execute({ firstName, lastName, phoneNumber });
		if (res && res.data) {
			console.log(res.data);
			navigation.navigate('VerifyCode', { phoneNumber });
		}
	};

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
