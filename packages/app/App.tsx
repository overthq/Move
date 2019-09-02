import React from 'react';
import { Provider, createClient } from 'urql';
import { useScreens } from 'react-native-screens';
import * as Constants from 'expo-constants';
import RootNavigator from './src/Root';

useScreens();

const devApiUrl = `http://${Constants.default.manifest.debuggerHost
	.split(':')
	.shift()
	.concat(':4000/')}`;

const client = createClient({ url: devApiUrl });

const App = () => (
	<Provider value={client}>
		<RootNavigator />
	</Provider>
);

export default App;
