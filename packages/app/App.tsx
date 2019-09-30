import React from 'react';
import { Provider, createClient } from 'urql';
import * as Constants from 'expo-constants';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';
import { SettingsProvider } from './src/contexts/SettingsContext';

const devApiUrl = `http://${Constants.default.manifest.debuggerHost
	.split(':')
	.shift()
	.concat(':4000/')}`;

const client = createClient({ url: devApiUrl });

const App = () => (
	<UserProvider>
		<SettingsProvider>
			<Provider value={client}>
				<RootNavigator />
			</Provider>
		</SettingsProvider>
	</UserProvider>
);

export default App;
