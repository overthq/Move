import React from 'react';
import { Provider, createClient } from 'urql';
import { useScreens } from 'react-native-screens';
import * as Constants from 'expo-constants';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';

useScreens();

const client = createClient({
	url: `http://${Constants.default.manifest.debuggerHost
		.split(':')
		.shift()
		.concat(':4000/')}`
});

const App = () => (
	<UserProvider>
		<Provider value={client}>
			<RootNavigator />
		</Provider>
	</UserProvider>
);

export default App;
