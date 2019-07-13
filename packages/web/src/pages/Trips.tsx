import React from 'react';

const fetchTrips = async () => {
	const response = await fetch('', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	const { trips } = await response.json();
	return trips as any[];
};

const Trips = () => {
	const [trips, setTrips] = React.useState<any[]>([]);

	React.useEffect(() => {
		findAllTrips();
	}, []);

	const findAllTrips = async () => {
		const trips = await fetchTrips();
		setTrips(trips);
	};

	return (
		<div>
			{trips.map((trip, index) => (
				<div key={index}>
					<p>{trip.origin}</p>
					<p>{trip.destination}</p>
				</div>
			))}
		</div>
	);
};

export default Trips;
