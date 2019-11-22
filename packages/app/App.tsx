import React from 'react';
import { Provider, createClient } from 'urql';
import { useScreens } from 'react-native-screens';
import * as Constants from 'expo-constants';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
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
			<ActionSheetProvider>
				<RootNavigator />
			</ActionSheetProvider>
		</Provider>
	</UserProvider>
);

export default App;
