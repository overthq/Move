import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Home from './Home';
import Stops from './Stops';
import Stop from './Stop';
import Settings from './Settings';

const AppContainer = styled.main`
	height: 100%;
	padding: 20px 20px 0 20px;
	overflow-y: scroll;
	flex-grow: 1;
	background-color: #fafafa;
`;

const AppWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
`;

const AppRouter = () => (
	<BrowserRouter>
		<AppWrapper>
			<Sidebar />
			<AppContainer>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/stops' component={Stops} />
					<Route path='/stops/:stopId' component={Stop} />
					<Route path='/settings' component={Settings} />
				</Switch>
			</AppContainer>
		</AppWrapper>
	</BrowserRouter>
);

export default AppRouter;
