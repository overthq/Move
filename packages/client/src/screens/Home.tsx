import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Text } from '@move/components';
import { AppState } from '@move/core';
import { NavigationScreenProps } from 'react-navigation';
import QRCodeScanner from '../components/QRCodeScanner';

const stateMapper = ({ auth: { user } }: AppState) => user;

const Home = ({ navigation }: NavigationScreenProps) => {
	const user = useSelector(stateMapper);
	if (!user) return navigation.navigate('Auth');

	return (
		<View style={{ flex: 1 }}>
			<Text bold>{`Hello, ${user.firstName}`}</Text>
			<QRCodeScanner />
		</View>
	);
};

export default Home;
