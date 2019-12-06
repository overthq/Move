import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const links = [
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'Bus Stops',
		path: '/stops'
	},
	{
		label: 'Settings',
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
		margin-top: 5px;
	}
`;

const SidebarNav = styled.nav`
	height: 100%;
	width: 225px;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 5px;
`;

const Sidebar = () => (
	<SidebarNav>
		{links.map(({ label, path }) => (
			<SidebarLink exact key={label} to={path}>
				{label}
			</SidebarLink>
		))}
	</SidebarNav>
);

export default Sidebar;
