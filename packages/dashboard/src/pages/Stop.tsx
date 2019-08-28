import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'urql';
import { BUS_STOP } from '@move/core';

const Stop = ({ match }: RouteComponentProps<{ stopId: string }>) => {
	const {
		params: { stopId }
	} = match;
	const [{ fetching, data, error }] = useQuery({
		query: BUS_STOP,
		variables: { id: stopId }
	});

	if (fetching || !data) {
		return null;
	}
	if (error) console.error(error);

	return (
		<div>
			<h1>{data.busStop.name}</h1>
		</div>
	);
};

export default Stop;
