import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useBusStopsQuery } from '@move/core';
import CreateStop from './CreateStop';

const Stops = ({ match }: RouteComponentProps) => {
	const [{ fetching, data, error }] = useBusStopsQuery();

	if (fetching) return <p>Loading</p>;
	if (!data) return null;
	if (error) console.error(error);

	return (
		<div>
			<h1>Bus Stops</h1>
			<CreateStop />
			<div>
				{data.busStops.map(busStop => (
					<Link key={busStop._id} to={`${match.url}/${busStop._id}`}>
						{busStop.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Stops;
