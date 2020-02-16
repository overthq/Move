import { Payment, Wallet } from '../models';

const paymentQuery = {
	walletPayments: async (_, { input }) => {
		const { walletId } = input;
		// Should we verify that the user owns the wallet.
		const wallet = await Wallet.findById(walletId);
		if (!wallet) throw new Error('');

		const payments = await Payment.find({ wallet: walletId });
		return payments;
	}
};

export default paymentQuery;
