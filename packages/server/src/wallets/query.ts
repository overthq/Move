import { Wallet } from '../models';

const walletsQuery = {
	wallet: async (_, { userId }) => {
		const userWallet = await Wallet.findOne({ user: userId }).populate('user');
		if (!userWallet)
			throw new Error('Wallet does not exist for specified user.');
		return userWallet;
	}
};

export default walletsQuery;
