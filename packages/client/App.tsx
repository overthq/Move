import React from 'react';
import { Provider } from 'react-redux';
import Root from './src/Root';
import { useScreens } from 'react-native-screens';
import { store, persistor, PersistGate } from '@move/core';

useScreens();

const App = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<Root />
		</PersistGate>
	</Provider>
);

export default App;
