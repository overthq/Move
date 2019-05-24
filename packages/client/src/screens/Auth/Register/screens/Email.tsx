import React from 'react';
import { Alert, KeyboardAvoidingView, Text, Keyboard } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Button, Input } from '@move/components';
import styles from '../../styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
				<Text style={styles.pageHeader}>Your email address?</Text>
				<Input
					value={email}
					placeholder='Email Address'
					onChangeText={(value: string) => setEmail(value)}
					autoCapitalize='none'
					autoCorrect={false}
					full
					style={{ marginBottom: 15 }}
				/>
				<Button onPress={handleSubmit} full>
					Next
				</Button>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default Email;
