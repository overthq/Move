import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '@move/core';

const stateMapper = ({ auth: { user } }: AppState) => user;

const Home = () => {
	const user = useSelector(stateMapper);
	if (!user) return <Text>No user found</Text>;
	return <View style={{ flex: 1 }}></View>;
};

export default Home;
