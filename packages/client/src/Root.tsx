import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@move/core';
import { ThemeProvider } from './contexts/ThemeContext';
import createRootNavigator from './screens';

const stateMapper = ({ auth: { accessToken } }: AppState) => ({
	accessToken
});

const Root = () => {
	const { accessToken } = useSelector(stateMapper);
	const AppNavigator = createRootNavigator(!!accessToken);
	return (
		<ThemeProvider>
			<AppNavigator />
		</ThemeProvider>
	);
};

export default Root;
