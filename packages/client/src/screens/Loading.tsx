import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import { AppState } from '@move/core';

interface LoadingProps extends NavigationScreenProps {
	accessToken: string;
}

const Loading = ({ accessToken, navigation }: LoadingProps) => {
	if (!accessToken) {
		navigation.navigate('Auth');
	} else {
		navigation.navigate('Main');
	}
	return <View />;
};

const mapStateToProps = ({ auth }: AppState) => ({
	accessToken: auth.accessToken
});

export default connect(mapStateToProps)(Loading);
