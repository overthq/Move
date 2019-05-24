import React from 'react';
import {
	Alert,
	KeyboardAvoidingView,
	View,
	Text,
	Keyboard,
	Dimensions
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Button, Input } from '@move/components';
import styles from '../../styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

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
				<View style={[styles.container, { width }]}>
					<Text style={styles.pageHeader}>Your email address?</Text>
					<Input
						value={email}
						placeholder='Email Address'
						onChangeText={(value: string) => setEmail(value)}
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='email-address'
						full
						style={{ marginBottom: 15 }}
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
