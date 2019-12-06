import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useBusStopsQuery } from '@move/core';
import CreateStop from './CreateStop';

interface CreateBusStopProps {
	isOpen: boolean;
	openModal(): void;
}

const CreateBusStop = ({ isOpen, openModal }: CreateBusStopProps) => (
	<div>
		<button onClick={openModal}>Create</button>
		<Modal isOpen={isOpen}>
			<h2>Create Bus Stop</h2>
			<CreateStop />
		</Modal>
	</div>
);

const Stops: React.FC = () => {
	const [{ fetching, data, error }] = useBusStopsQuery();
	const [modalOpen, setModalOpen] = React.useState(false);

	if (fetching) return <p>Loading</p>;
	if (error) return <p>Error</p>;
	if (!data) return null;

	const openModal = () => setModalOpen(true);

	return (
		<div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<h1 style={{ margin: '0 10px 0 0' }}>Bus Stops</h1>
				<CreateBusStop isOpen={modalOpen} {...{ openModal }} />
			</div>
			<ul>
				{data.busStops.map(busStop => (
					<li key={busStop._id}>
						<Link to={`/stops/${busStop._id}`}>{busStop.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Stops;
