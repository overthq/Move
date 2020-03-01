import React from 'react';
import { Provider, createClient, dedupExchange, fetchExchange } from 'urql';
import {
	cacheExchange,
	StorageAdapter,
	SerializedEntries
} from '@urql/exchange-graphcache';
import { enableScreens } from 'react-native-screens';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';
import { ModalsProvider } from './src/contexts/ModalsContext';
import env from './env';

enableScreens();

// I have to find a storageAdapter written for localStorage.
// That should be easy to port.
// The issue here, is the fact that I don't want to store the data directly in AsyncStorage.
const storage: StorageAdapter = {
	read: async () => {
		// Look for the persisted data in AsyncStorage.
		return {} as SerializedEntries;
	},
	write: async batch => {
		console.log(batch);
		// Check if the data actually exists
		// If it's value was undefined, remove it.
		// If it does, then overwrite it.
	}
};

const client = createClient({
	url: env.apiUrl,
	exchanges: [dedupExchange, cacheExchange({ storage }), fetchExchange]
});

const App = () => (
	<UserProvider>
		<Provider value={client}>
			<ActionSheetProvider>
				<ModalsProvider>
					<RootNavigator />
				</ModalsProvider>
			</ActionSheetProvider>
		</Provider>
	</UserProvider>
);

export default App;
