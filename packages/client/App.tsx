import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/screens';
import { useScreens } from 'react-native-screens';
import { store } from '@move/core';

useScreens();

const App = () => (
	<Provider store={store}>
		<AppNavigator />
	</Provider>
);

export default App;
