import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'urql';
import QRCode from 'qrcode.react';
import { BUS_STOP } from '@move/core';
import { Route, BusStop } from '@move/types';

const getAccurateName = (busStop: BusStop, route: Route) => {
	if (busStop.name === route.origin.name) return route.destination.name;
	else if (busStop.name === route.destination.name) return route.origin.name;
	else throw new Error('Impossible to have reached this point');
};

const Stop = ({ match }: RouteComponentProps<{ stopId: string }>) => {
	const {
		params: { stopId }
	} = match;

	const [{ fetching, data, error }] = useQuery<{ busStop: BusStop }>({
		query: BUS_STOP,
		variables: { id: stopId }
	});

	if (fetching || !data || !data.busStop) return null;
	if (error) console.error(error);

	return (
		<div>
			<h1>{data.busStop.name}</h1>
			{data.busStop.routes.map(route => {
				console.log(route._id);
				return (
					<>
						<p key={route._id}>{getAccurateName(data.busStop, route)}</p>
						<QRCode value={route._id} bgColor='transparent' />
					</>
				);
			})}
		</div>
	);
};

export default Stop;
