import React from 'react';
import { Provider, createClient } from 'urql';
import { enableScreens } from 'react-native-screens';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';
import { ModalsProvider } from './src/contexts/ModalsContext';
import env from './env';

enableScreens();

const client = createClient({ url: env.apiUrl });

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
