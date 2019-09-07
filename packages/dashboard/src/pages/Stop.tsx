import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { useBusStopQuery, BusStop, Route } from '@move/core';

const getAccurateName = (busStop: BusStop, route: Route) => {
	if (busStop.name === route.origin.name) return route.destination.name;
	else if (busStop.name === route.destination.name) return route.origin.name;
	else throw new Error('Impossible to have reached this point');
};

const Stop = ({ match }: RouteComponentProps<{ stopId: string }>) => {
	const {
		params: { stopId }
	} = match;

	const [{ fetching, data, error }] = useBusStopQuery({
		variables: { id: stopId }
	});

	if (fetching || !data || !data.busStop) return null;
	if (error) console.error(error);

	return (
		<div>
			<h1>{data.busStop.name}</h1>
			{data.busStop.routes.map(route => (
				<>
					<p key={route._id}>{getAccurateName(data.busStop, route)}</p>
					<QRCode value={route._id} bgColor='transparent' />
				</>
			))}
		</div>
	);
};

export default Stop;
