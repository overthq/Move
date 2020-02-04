import React from 'react';
import {
	View,
	Animated,
	TouchableOpacity,
	Text,
	TextInput,
	StyleSheet,
	Dimensions
} from 'react-native';
import { Modalize } from 'react-native-modalize';

const { width } = Dimensions.get('window');

interface AddCardModalProps {
	modalRef: React.RefObject<Modalize>;
}

const CardNumber = () => {
	const [cardNumber, setCardNumber] = React.useState('');
	return <TextInput value={cardNumber} onChangeText={setCardNumber} />;
};

const CVVNumber = () => {
	const [cvv, setCvv] = React.useState('');
	return <TextInput value={cvv} onChangeText={setCvv} />;
};

const steps = [
	{ title: 'Card Number', content: <CardNumber /> },
	{ title: 'CVV Number', content: <CVVNumber /> }
];

const AddCardModal: React.FC<AddCardModalProps> = ({ modalRef }) => {
	const [step, setStep] = React.useState(steps[0]);
	const [opacity] = React.useState(new Animated.Value(1));
	const [barWidth] = React.useState(
		new Animated.Value((1 / steps.length) * width)
	);

	const toNextStep = () => {
		Animated.parallel([
			Animated.timing(barWidth, {
				toValue: ((steps.indexOf(step) + 2) / steps.length) * width,
				duration: 1000
			}),
			Animated.timing(opacity, { toValue: 0, duration: 200 })
		]).start(() => {
			setStep(steps[steps.indexOf(step) + 1]);
		});
	};

	React.useEffect(() => {
		Animated.timing(opacity, { toValue: 1, duration: 200 }).start();
	}, [step]);

	return (
		<Modalize ref={modalRef} adjustToContentHeight>
			<View style={styles.modal}>
				<Animated.View style={[styles.bar, { width: barWidth }]} />
				<View style={{ marginBottom: 20 }}>
					<Animated.View style={{ opacity }}>
						<Text style={styles.stepTitle}>{step.title}</Text>
						{step.content}
					</Animated.View>
					<TouchableOpacity
						onPress={() => {
							steps.indexOf(step) !== steps.length - 1 && toNextStep();
						}}
					>
						<Text>Next</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modalize>
	);
};

const styles = StyleSheet.create({
	modal: {
		// padding: 20
		overflow: 'hidden'
	},
	barContainer: {
		width: '100%',
		height: 20,
		borderColor: 'red',
		borderWidth: 10
	},
	bar: {
		height: 5,
		backgroundColor: '#000000'
	},
	stepTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#100100'
	}
});

export default AddCardModal;
