import React from 'react';
import styled from 'styled-components';

const TicketWrapper = styled.div`
	background: linear-gradient(#505050, #d3d3d3);
	width: 400px;
	height: 220px;
	border-radius: 6px;
`;

interface TicketProps {
	zone: string;
}

const Ticket = ({ zone }: TicketProps) => {
	return <TicketWrapper>{zone}</TicketWrapper>;
};

export default Ticket;
