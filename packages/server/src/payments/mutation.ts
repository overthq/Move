import { Wallet, Payment } from '../models';

const paymentMutation = {
	makePayment: async (_, { input }) => {
		const { userId, routeId } = input;
		const wallet = await Wallet.findOne({ user: userId });
		if (!wallet) throw new Error('Specified user does not own a wallet. Weird');
		const payment = await Payment.create({ wallet: wallet.id, route: routeId });
		return payment.populate('wallet route');
	}
};

export default paymentMutation;
