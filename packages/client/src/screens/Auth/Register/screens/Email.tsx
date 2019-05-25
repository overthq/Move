import React from 'react';
import {
	Alert,
	KeyboardAvoidingView,
	Text,
	Keyboard,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Button, Input } from '@move/components';
import styles from '../../styles';

const Email = (props: NavigationScreenProps) => {
	const [email, setEmail] = React.useState('');

	const handleSubmit = async () => {
		try {
			props.navigation.navigate('Password');
		} catch (error) {
			Alert.alert(error.message);
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={[styles.formContainer]}>
					<Text style={styles.pageHeader}>Your email address</Text>
					<Input
						value={email}
						placeholder='Email Address'
						onChangeText={(value: string) => setEmail(value)}
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='email-address'
						full
					/>
					<Button onPress={handleSubmit} full>
						Next
					</Button>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Email;
