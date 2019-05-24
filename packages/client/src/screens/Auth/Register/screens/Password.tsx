import React from 'react';
import {
	Alert,
	KeyboardAvoidingView,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions
} from 'react-native';
import { Button, Input } from '@move/components';
import styles from '../../styles';

const { width } = Dimensions.get('window');

const Name = () => {
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
			<TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
				<View style={[styles.container, { width }]}>
					<Text style={styles.pageHeader}>{`What's your name?`}</Text>
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
					<Input
						value={confirmPassword}
						placeholder='Confirm password'
						onChangeText={(value: string) => setConfirmPassword(value)}
						autoCapitalize='none'
						autoCorrect={false}
						secureTextEntry
						full
						style={{ marginBottom: 15 }}
					/>
					<Button onPress={handleSubmit} full>
						Create Account
					</Button>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Name;
