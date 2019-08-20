import React from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';

const Home = () => (
	<View>
		<Camera />
		<Text>Name is Korede</Text>
	</View>
);

export default Home;
