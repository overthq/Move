import React from 'react';
import { useQuery } from 'urql';
import { Link, RouteComponentProps } from 'react-router-dom';
import { BUS_STOPS } from '@move/core';
import { BusStop } from '@move/types';
import CreateStop from './CreateStop';

const Stops = ({ match }: RouteComponentProps) => {
	const [{ fetching, data, error }] = useQuery({ query: BUS_STOPS });

	if (fetching || !data) return null;
	if (error) console.error(error);

	return (
		<div>
			<h1>Bus Stops</h1>
			<CreateStop />
			<div>
				{data.busStops.map((busStop: BusStop) => (
					<Link key={busStop._id} to={`${match.url}/${busStop._id}`}>
						{busStop.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Stops;
