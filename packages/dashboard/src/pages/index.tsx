import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Stops from './Stops';
import Stop from './Stop';

const AppContainer = styled.main`
	height: 100%;
	padding-left: 15px;
	padding-right: 15px;
	overflow-y: scroll;
	flex-grow: 1;
	background-color: #f2f5fa;
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
					<Route exact path='/stops' component={Stops} />
					<Route path='/stops/:stopId' component={Stop} />
				</Switch>
			</AppContainer>
		</AppWrapper>
	</BrowserRouter>
);

export default AppRouter;
