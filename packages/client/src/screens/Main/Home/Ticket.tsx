import React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import Animated from 'react-native-reanimated';

const { height } = Dimensions.get('window');

const Ticket = () => {
	const topHeight = new Animated.Value(0);
	React.useEffect((): void => {
		topHeight.interpolate({
			inputRange: [0, 1],
			outputRange: [0, height / 2],
			extrapolate: Animated.Extrapolate.CLAMP
		});
	}, []);
	return (
		<SafeAreaView>
			<Transition appear='scale' disappear='top' name='ticket'>
				<Animated.View style={{ height }} />
			</Transition>
		</SafeAreaView>
	);
};

export default Ticket;
