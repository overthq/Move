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
import { NavigationScreenProps } from 'react-navigation';
import { Button, Input } from '@move/components';
import styles from '../../styles';

const { width } = Dimensions.get('window');

const Name = (props: NavigationScreenProps) => {
	const [firstName, setFirstName] = React.useState('');
	const [lastName, setLastName] = React.useState('');

	const handleSubmit = async () => {
		try {
			props.navigation.navigate('Email');
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
						value={firstName}
						placeholder='First Name'
						onChangeText={(value: string) => setFirstName(value)}
						autoCorrect={false}
						full
						style={{ marginBottom: 15 }}
					/>
					<Input
						value={lastName}
						placeholder='Last Name'
						onChangeText={(value: string) => setLastName(value)}
						autoCorrect={false}
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

export default Name;
