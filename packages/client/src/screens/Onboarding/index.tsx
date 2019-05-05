import React from 'react';
import { View, Text } from 'react-native';

import slides from './slides';

const Onboarding = (): JSX.Element => {
	return (
		<View>
			{slides.map(({ title, description }) => (
				<View key={title.toLowerCase()}>
					<Text>{title}</Text>
					<Text>{description}</Text>
				</View>
			))}
		</View>
	);
};

export default Onboarding;
