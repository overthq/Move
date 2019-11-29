import React from 'react';
import { Provider, createClient } from 'urql';
import AppRouter from './pages';

const client = createClient({ url: process.env.REACT_APP_API_URL as string });

const App: React.FC = () => (
	<Provider value={client}>
		<AppRouter />
	</Provider>
);

export default App;
