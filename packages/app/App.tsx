import React from 'react';
import { Provider, createClient } from 'urql';
import * as Constants from 'expo-constants';
import RootNavigator from './src/navigation';

const extractDevApiUrl = () => {
	return Constants.default.manifest.debuggerHost
		.split(':')
		.shift()
		.concat(':4000/');
};

const client = createClient({
	url: extractDevApiUrl()
});

const App = () => (
	<Provider value={client}>
		<RootNavigator />;
	</Provider>
);

export default App;
