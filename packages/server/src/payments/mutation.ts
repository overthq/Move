import { Payment } from '../models';

const paymentMutation = {
	makePayment: async (_, { input }) => {
		const { amount } = input;
		const payment = await Payment.create({ amount });
		return payment;
	}
};

export default paymentMutation;
