import { BusStop } from '../models';

export const verifyStops = async (origin: string, destination: string) => {
	const originBusStop = await BusStop.findById(origin);
	const destinationBusStop = await BusStop.findById(destination);

	if (!originBusStop || !destinationBusStop) {
		throw new Error('Origin or destination bus stop is invalid');
	}

	return { originBusStop, destinationBusStop };
};
