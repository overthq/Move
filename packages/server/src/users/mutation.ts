import { User, VerificationCode, Wallet } from '../models';

// Note: This has to be extracted into an helper soon.
const sendVerificationCode = async (phoneNumber: string) => {
	const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
	await VerificationCode.create({ phoneNumber, code: randomCode });
	// Send it to the user's phone number via SMS, maybe with Twilio?
	console.log(phoneNumber, randomCode);
};

const userMutations = {
	login: async (_, { input }) => {
		const { phoneNumber } = input;
		const user = await User.findOne({ phoneNumber });
		if (!user) throw new Error('The specified user does not exist');
		await sendVerificationCode(phoneNumber);
		return `Verification message sent to ${phoneNumber}`;
	},
	register: async (_, { input }) => {
		const { firstName, lastName, phoneNumber } = input;
		try {
			const user = await User.create({ firstName, lastName, phoneNumber });
			await Promise.all([
				sendVerificationCode(phoneNumber),
				Wallet.create({ user: user.id })
			]);
			return `Verification message sent to ${phoneNumber}`;
		} catch (error) {
			throw new Error(error);
		}
	},
	verifyCode: async (_, { phoneNumber, code }) => {
		const verificationCode = await VerificationCode.findOne({
			phoneNumber,
			code
		});
		if (!verificationCode) {
			throw new Error('The verification code entered is invalid');
		}
		const user = await User.findOne({ phoneNumber });
		if (!user) throw new Error('No user found with the specified details');
		await verificationCode.remove();
		return user;
	}
};

export default userMutations;
