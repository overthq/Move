import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView
} from 'react-native';
import { useRegisterMutation } from '@move/core';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

interface RegisterProps {
	navigation: StackNavigationProp<any>;
}

const Register = ({ navigation }: RegisterProps) => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [{ data }, execute] = useRegisterMutation();

	React.useEffect(() => {
		if (data && data.register) {
			navigation.navigate('VerifyCode', { phoneNumber });
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
