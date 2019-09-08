import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

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

interface SidebarLinkProps {
	label: string;
	path: string;
}

const SidebarLink = ({ label, path }: SidebarLinkProps) => (
	<NavLink to={path}>{label}</NavLink>
);

const Sidebar = () => (
	<nav>
		{links.map(link => (
			<SidebarLink key={link.label} {...link} />
		))}
	</nav>
);

export default Sidebar;
