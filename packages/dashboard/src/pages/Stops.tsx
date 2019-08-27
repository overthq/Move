import React from 'react';
import { useQuery } from 'urql';
import { BUS_STOPS } from '@move/core';

const Stops = () => {
	const [{ fetching, data, error }] = useQuery({ query: BUS_STOPS });

	if (fetching || !data) return null;

	return <div></div>;
};

export default Stops;
