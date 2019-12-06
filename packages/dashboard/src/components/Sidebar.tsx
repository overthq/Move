import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Home, Settings, Map } from 'react-feather';

const links = [
	{
		label: 'Home',
		icon: <Home size={16} />,
		path: '/'
	},
	{
		label: 'Bus Stops',
		icon: <Map size={16} />,
		path: '/stops'
	},
	{
		label: 'Settings',
		icon: <Settings size={16} />,
		path: '/settings'
	}
];

const SidebarLink = styled(NavLink)`
	width: calc(100% - 30px);
	padding: 5px;
	border-radius: 4px;
	color: #505050;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.875rem;
	display: flex;

	&.active {
		background-color: #d3d3d3;
	}

	&:hover:not(.active) {
		background-color: #fafafa;
	}

	&:not(last-of-type) {
		margin-top: 10px;
	}
`;

const SidebarNav = styled.nav`
	height: 100%;
	width: 200px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Sidebar = () => (
	<SidebarNav>
		{links.map(({ label, icon, path }) => (
			<SidebarLink exact key={label} to={path}>
				<div style={{ marginRight: 5 }}>{icon}</div>
				<span>{label}</span>
			</SidebarLink>
		))}
	</SidebarNav>
);

export default Sidebar;
