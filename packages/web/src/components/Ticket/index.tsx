import React from 'react';

interface TicketProps {
	zone: string;
}

const Ticket = ({ zone }: TicketProps) => {
	return <div>{zone}</div>;
};

export default Ticket;
