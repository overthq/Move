import React from 'react';
import { Provider, createClient } from 'urql';
import { useScreens } from 'react-native-screens';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';
import env from './env';

useScreens();

const client = createClient({ url: env.apiUrl });

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
