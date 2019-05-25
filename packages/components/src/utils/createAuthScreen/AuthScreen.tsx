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
		onError,
		initialState,
		buttonText
	} = props;

	const [state, dispatch] = React.useReducer(
		(prev, next) => ({ ...prev, ...next }),
		initialState
	);

	const handleChange = (name: string, value: string) => {
		return dispatch({ [name]: value });
	};

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
							value={state[field.name]}
							onChangeText={(value: string) => handleChange(field.name, value)}
							placeholder={field.placeholder}
							{...field.props}
						/>
					))}
					<Button onPress={handleSubmit} full>
						{buttonText || 'Next'}
					</Button>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default AuthScreen;
