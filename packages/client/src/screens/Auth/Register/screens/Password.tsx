import React from 'react';
import {
	Alert,
	KeyboardAvoidingView,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	View
} from 'react-native';
import { Button, Input } from '@move/components';
import styles from '../../styles';

const Password = () => {
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');

	const handleSubmit = async () => {
		try {
			// Create the account
		} catch (error) {
			Alert.alert(error.message);
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={[styles.formContainer]}>
					<Text style={styles.pageHeader}>Set your password</Text>
					<Input
						value={password}
						placeholder='Password'
						onChangeText={(value: string) => setPassword(value)}
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry
						full
					/>
					<Input
						value={confirmPassword}
						placeholder='Confirm password'
						onChangeText={(value: string) => setConfirmPassword(value)}
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry
						full
					/>
					<Button onPress={handleSubmit} full>
						Create Account
					</Button>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Password;
