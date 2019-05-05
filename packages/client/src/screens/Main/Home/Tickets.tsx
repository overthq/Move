import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

const Tickets = (): JSX.Element => {
	return (
		<SafeAreaView>
			<Transition name='ticket'>
				<View />
			</Transition>
		</SafeAreaView>
	);
};

export default Tickets;
