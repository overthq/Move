import React from 'react';
import { Provider, createClient } from 'urql';
import Feather from 'react-native-vector-icons/Feather';
// import { useScreens } from 'react-native-screens';
import RootNavigator from './src/Root';
import { UserProvider } from './src/contexts/UserContext';
import { SettingsProvider } from './src/contexts/SettingsContext';

// useScreens();
Feather.loadFont();

const devApiUrl = 'http://localhost:4000';

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
