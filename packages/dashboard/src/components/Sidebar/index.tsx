import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './styles.css';

interface SidebarLinkProps {
	label: string;
	path: string;
}

const links = [
	{
		label: 'Home',
		path: '/'
	},
	{
		label: 'Bus Stops',
		path: '/stops'
	}
];

const SidebarLinkWrapper = styled(NavLink)`
	color: rgb(4, 34, 85);
	font-weight: 500;
	text-decoration: none;
	&:not(last-of-type) {
		margin-bottom: 5px;
	}
`;

const SidebarLink = ({ label, path }: SidebarLinkProps) => (
	<SidebarLinkWrapper to={path}>{label}</SidebarLinkWrapper>
);

const Sidebar = () => (
	<nav>
		{links.map(link => (
			<SidebarLink key={link.label} {...link} />
		))}
	</nav>
);

export default Sidebar;
