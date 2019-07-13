import RavePay, { CardDetails } from 'ravepay';
import { RAVE_API_PUBLIC_KEY, RAVE_API_SECRET_KEY } from '../config/env';

const rave = new RavePay(
	RAVE_API_PUBLIC_KEY,
	RAVE_API_SECRET_KEY,
	process.env.NODE_ENV === 'production'
);

export const purchasePoints = async (amount: number, userId: string) => {
	try {
	} catch (error) {}
};
