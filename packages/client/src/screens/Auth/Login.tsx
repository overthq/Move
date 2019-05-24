import React from 'react';
import { Alert, KeyboardAvoidingView, Text } from 'react-native';
import { Button, Input } from '@move/components';
import styles from './styles';

const Login = (): JSX.Element => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleSubmit = async () => {
		try {
			console.log(email, password);
		} catch (error) {
			Alert.alert(error.message);
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<Text style={styles.pageHeader}>Welcome back.</Text>
			<Input
				value={email}
				placeholder='Email'
				onChangeText={(value: string) => setEmail(value)}
				autoCapitalize='none'
				autoCorrect={false}
				full
				style={{ marginBottom: 15 }}
			/>
			<Input
				value={password}
				placeholder='Password'
				onChangeText={(value: string) => setPassword(value)}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
				full
				style={{ marginBottom: 15 }}
			/>
			<Button onPress={handleSubmit} full>
				Log In
			</Button>
		</KeyboardAvoidingView>
	);
};

export default Login;
