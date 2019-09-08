import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const SidebarNav = styled.nav`
	height: 100%;
	width: 15%;
	max-width: 250px;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SidebarLink = ({ label, path }: SidebarLinkProps) => (
	<SidebarLinkWrapper to={path}>{label}</SidebarLinkWrapper>
);

const Sidebar = () => (
	<SidebarNav>
		{links.map(link => (
			<SidebarLink key={link.label} {...link} />
		))}
	</SidebarNav>
);

export default Sidebar;
