import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { timing } from 'react-native-redash';
import { Modalize } from 'react-native-modalize';

interface AddCardModalProps {
	modalRef: React.RefObject<Modalize>;
}

const CardNumber = () => {
	// This is going to be a controlled input.
	return <View />;
};

const CVVNumber = () => {
	// This is going to be a controlled input.
	return <View />;
};

const steps = [
	{ title: 'Card Number', content: <CardNumber /> },
	{ title: 'CVV Number', content: <CVVNumber /> }
];

const AddCardModal: React.FC<AddCardModalProps> = ({ modalRef }) => {
	const [step, setStep] = React.useState(0);
	const [opacity] = React.useState(new Animated.Value<number>(1));
	const [barWidth] = React.useState(new Animated.Value<number>(1));

	const toPreviousStep = () => {
		timing({
			from: barWidth,
			to: step / steps.length,
			duration: 200
		});
		timing({ from: opacity, to: 0, duration: 200 });
		setStep(step - 1);
		timing({ from: opacity, to: 1, duration: 200 });
	};

	const toNextStep = () => {
		timing({
			from: barWidth,
			to: (step + 2) / steps.length,
			duration: 200
		});
		timing({ from: opacity, to: 0, duration: 200 });
		setStep(step + 1);
		timing({ from: opacity, to: 1, duration: 200 });
	};

	return (
		<Modalize
			ref={modalRef}
			adjustToContentHeight
			handlePosition='outside'
			modalStyle={{ overflow: 'hidden' }}
		>
			<View style={styles.modal}>
				<Animated.View
					style={[
						styles.bar,
						{
							width: Animated.concat(
								barWidth.interpolate({
									inputRange: [0, 1],
									outputRange: [0, 100]
								}),
								'%'
							)
						}
					]}
				/>
				<View style={{ margin: 15 }}>
					<Animated.View style={{ opacity }}>
						<Text style={styles.stepTitle}>{steps[step].title}</Text>
						{steps[step].content}
					</Animated.View>
					<View
						style={{
							width: '100%',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}
					>
						<TouchableOpacity
							style={styles.button}
							disabled={step === 0}
							onPress={toPreviousStep}
						>
							<Text style={styles.buttonText}>Back</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.button}
							disabled={step === steps.length - 1}
							onPress={toNextStep}
						>
							<Text style={styles.buttonText}>Next</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modalize>
	);
};

const styles = StyleSheet.create({
	modal: {
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
	},
	button: {
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 4,
		backgroundColor: '#100100'
	},
	buttonText: {
		color: '#FFFFFF',
		fontWeight: '500',
		fontSize: 14
	}
});

export default AddCardModal;
