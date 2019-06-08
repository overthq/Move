import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '@move/core';
import { ThemeProvider } from './contexts/ThemeContext';
import createRootNavigator from './screens';

interface RootProps {
	accessToken: string;
}

const Root = ({ accessToken }: RootProps) => {
	const AppNavigator = createRootNavigator(!!accessToken);
	return (
		<ThemeProvider>
			<AppNavigator />
		</ThemeProvider>
	);
};

const mapStateToProps = ({ auth: { accessToken } }: AppState) => ({
	accessToken
});

export default connect(mapStateToProps)(Root);
