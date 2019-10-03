import React from 'react';
import { Provider, createClient } from 'urql';
import * as Constants from 'expo-constants';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';

const devApiUrl = `http://${Constants.default.manifest.debuggerHost
	.split(':')
	.shift()
	.concat(':4000/')}`;

const client = createClient({ url: devApiUrl });

const App = () => (
	<UserProvider>
		<Provider value={client}>
			<RootNavigator />
		</Provider>
	</UserProvider>
);

export default App;
