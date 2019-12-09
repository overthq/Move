import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Dialog } from '@reach/dialog';
import { useBusStopsQuery } from '@move/core';
import CreateStop from './CreateStop';
import '@reach/dialog/styles.css';

interface CreateBusStopProps {
	isOpen: boolean;
	open(): void;
	close(): void;
}

const CreateBusStop = ({ isOpen, open, close }: CreateBusStopProps) => (
	<div>
		<button onClick={open}>Add new</button>
		<Dialog aria-label='Add new bus stop' isOpen={isOpen} onDismiss={close}>
			<h2>Create Bus Stop</h2>
			<CreateStop />
		</Dialog>
	</div>
);

const StopDetailWrapper = styled.div`
	background-color: #ffffff;
	border-radius: 4px;
	padding: 10px;
	margin-bottom: 10px;

	h3 {
		margin-top: 0;
	}
`;

const Stops: React.FC = () => {
	const [{ fetching, data, error }] = useBusStopsQuery();
	const [modalOpen, setModalOpen] = React.useState(false);

	if (fetching) return <p>Loading</p>;
	if (error) return <p>Error</p>;
	if (!data) return null;

	const open = () => setModalOpen(true);
	const close = () => setModalOpen(false);

	return (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<h1 style={{ marginRight: 10 }}>Bus Stops</h1>
				<CreateBusStop isOpen={modalOpen} {...{ open, close }} />
			</div>
			{data.busStops.map(({ _id, name, routes }) => (
				<StopDetailWrapper key={_id}>
					<Link to={`/stops/${_id}`}>
						<h3>{name}</h3>
					</Link>
					<span>{routes.length} routes</span>
				</StopDetailWrapper>
			))}
		</div>
	);
};

export default Stops;
