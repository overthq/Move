import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter = () => (
	<BrowserRouter>
		<Route path='/stops' component={Stops} />
	</BrowserRouter>
);

export default AppRouter;
