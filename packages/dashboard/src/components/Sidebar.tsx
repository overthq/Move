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
	width: 100%;
	padding: 5px;
	border-radius: 4px;
	color: #505050;
	text-decoration: none;
	font-weight: 500;
	font-size: 0.875rem;

	&.active {
		background-color: #d3d3d3;
	}

	&:hover:not(.active) {
		background-color: #fafafa;
	}

	&:not(last-of-type) {
		margin-bottom: 5px;
	}
`;

const SidebarNav = styled.nav`
	height: 100%;
	width: 10%;
	max-width: 250px;
	background-color: #ffffff;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Sidebar = () => (
	<SidebarNav>
		{links.map(({ label, path }) => (
			<SidebarLink key={label} to={path}>
				{label}
			</SidebarLink>
		))}
	</SidebarNav>
);

export default Sidebar;
