import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Stops from './Stops';

const AppContainer = styled.main`
	height: 100%;
	padding-left: 15px;
	padding-right: 15px;
	overflow-y: scroll;
	flex-grow: 1;
	background-color: #f2f5fa;
`;

const AppRouter = () => (
	<BrowserRouter>
		<div style={{ height: '100vh', width: '100vw', display: 'flex' }}>
			<Sidebar />
			<AppContainer>
				<Switch>
					<Route path='/stops' component={Stops} />
				</Switch>
			</AppContainer>
		</div>
	</BrowserRouter>
);

export default AppRouter;
