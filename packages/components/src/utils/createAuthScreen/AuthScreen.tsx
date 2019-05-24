import React from 'react';
import {
	KeyboardAvoidingView,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions
} from 'react-native';
import Button from '../../Button';
import Input from '../../Input';
import styles from './styles';
import { AuthScreenInfo } from '.';
const { width } = Dimensions.get('window');

const AuthScreen = (props: AuthScreenInfo) => {
	const {
		fields,
		header,
		navigation,
		nextScreenName,
		onSuccess,
		onError
	} = props;

	const handleSubmit = async () => {
		try {
			await onSuccess();
			nextScreenName && navigation.navigate(nextScreenName);
		} catch (error) {
			onError(error);
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={[styles.container, { width }]}>
					<Text style={styles.pageHeader}>{header}</Text>
					{fields.map(field => (
						<Input
							key={field.name}
							placeholder={field.placeholder}
							{...field.props}
						/>
					))}
					<Button onPress={handleSubmit} full>
						{nextScreenName ? 'Next' : 'Submit'}
					</Button>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default AuthScreen;
