import React from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { useMutation } from 'urql';
import { AUTH_LOGIN } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';

const Login = ({ navigation }: NavigationScreenProps) => {
	const [phoneNumber, setPhoneNumber] = React.useState('');
	const [res, executeMutation] = useMutation(AUTH_LOGIN);

	const handleTextChange = (text: string) => {
		setPhoneNumber(text);
	};

	const handleSubmit = React.useCallback(async () => {
		await executeMutation({ phoneNumber });
		if (res && res.data) {
			console.log(res.data);
			navigation.navigate('VerifyCode', { phoneNumber });
		}
	}, [executeMutation, res]);

	return (
		<View style={styles.container}>
			<Text>Your phone number</Text>
			<TextInput
				style={styles.input}
				placeholder='Your phone number'
				onChangeText={handleTextChange}
			/>
			<TouchableOpacity onPress={handleSubmit}>
				<Text>Next</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20
	},
	input: {
		height: 40,
		width: '100%',
		backgroundColor: '#D3D3D3',
		color: '#505050',
		marginVertical: 20,
		paddingLeft: 10,
		borderRadius: 6
	}
});

export default Login;
