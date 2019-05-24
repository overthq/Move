import React from 'react';
import { Alert, KeyboardAvoidingView, Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Button, Input } from '@move/components';
import styles from '../../styles';

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
			<Text style={styles.pageHeader}>{`What's your name?`}</Text>
			<Input
				value={firstName}
				placeholder='First Name'
				onChangeText={(value: string) => setFirstName(value)}
				autoCapitalize='none'
				autoCorrect={false}
				full
				style={{ marginBottom: 15 }}
			/>
			<Input
				value={lastName}
				placeholder='Last Name'
				onChangeText={(value: string) => setLastName(value)}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
				full
				style={{ marginBottom: 15 }}
			/>
			<Button onPress={handleSubmit} full>
				Next
			</Button>
		</KeyboardAvoidingView>
	);
};

export default Name;
