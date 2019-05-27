import React from 'react';
import {
	KeyboardAvoidingView,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Dimensions
} from 'react-native';
import Button from '../Button';
import Input from '../Input';
import styles from './styles';
import { AuthScreenProps } from './types';

const AuthScreen = (props: AuthScreenProps) => {
	const {
		fields,
		header,
		navigation,
		nextScreenName,
		onSubmit,
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
			await onSubmit(state);
			onSuccess && (await onSuccess());
			nextScreenName && navigation.navigate(nextScreenName);
		} catch (error) {
			onError(error);
		}
	};

	return (
		<KeyboardAvoidingView style={styles.container} behavior='padding'>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.avoidContainer}>
					<View style={styles.formContainer}>
						<Text style={styles.pageHeader}>{header}</Text>
						<>
							{fields.map((field, index) => (
								<Input
									key={field.name}
									value={state[field.name]}
									placeholder={field.placeholder}
									onChangeText={(value: string) =>
										handleChange(field.name, value)
									}
									autoFocus={index == 0}
									autoCorrect={false}
									full
									{...field.props}
								/>
							))}
						</>
						<Button onPress={handleSubmit} full>
							{buttonText || 'Next'}
						</Button>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default AuthScreen;
