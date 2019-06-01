import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const FAB = ({ onPress }: { onPress(): void }) => {
	return (
		<TouchableOpacity {...{ onPress }}>
			<Feather name='credit-card' size={30} color='#FFFFFF' />
		</TouchableOpacity>
	);
};

export default FAB;
