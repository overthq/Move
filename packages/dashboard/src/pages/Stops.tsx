import React from 'react';
import { Link } from 'react-router-dom';
import { useBusStopsQuery } from '@move/core';
import CreateStop from './CreateStop';

const Stops: React.FC = () => {
	const [{ fetching, data, error }] = useBusStopsQuery();

	if (fetching) return <p>Loading</p>;
	if (error) return <p>Error</p>;
	if (!data) return null;

	return (
		<div>
			<h1>Bus Stops</h1>
			<CreateStop />
			<div>
				{data.busStops.map(busStop => (
					<Link key={busStop._id} to={`/stops/${busStop._id}`}>
						{busStop.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Stops;
