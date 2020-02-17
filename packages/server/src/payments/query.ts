import { Payment, Wallet } from '../models';

const paymentQuery = {
	payments: async (_, { input }) => {
		const { userId } = input;
		const wallet = await Wallet.findOne({ user: userId });
		if (!wallet)
			throw new Error("User either does not exist or doesn't have a wallet");

		const payments = await Payment.find({ wallet: wallet.id });
		return payments;
	}
};

export default paymentQuery;
