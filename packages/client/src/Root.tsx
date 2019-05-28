import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '@move/core';
import createRootNavigator from './screens';

interface RootProps {
	accessToken: string;
}

const Root = ({ accessToken }: RootProps) => {
	const AppNavigator = createRootNavigator(!!accessToken);
	return <AppNavigator />;
};

const mapStateToProps = ({ auth }: AppState) => ({
	accessToken: auth.accessToken
});

export default connect(mapStateToProps)(Root);
