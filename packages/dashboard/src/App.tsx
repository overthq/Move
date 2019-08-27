import React from 'react';
import { Provider, createClient } from 'urql';
import AppRouter from './pages';

const client = createClient({
	url: 'http://localhost:4000'
});

const App: React.FC = () => (
	<Provider value={client}>
		<AppRouter />
	</Provider>
);

export default App;
