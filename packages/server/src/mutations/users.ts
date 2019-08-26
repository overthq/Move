import { User, VerificationCode } from '../models';

// Note: This has to be extracted into an helper soon.
const sendVerificationCode = async (phoneNumber: string) => {
	const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
	await new VerificationCode({ phoneNumber, code: randomCode }).save();
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
		const user = await new User({ firstName, lastName, phoneNumber }).save();
		if (!user) throw new Error('The specified user does not exist');
		await sendVerificationCode(phoneNumber);
		return `Verification message sent to ${phoneNumber}`;
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
		return user; // This should obviously go along with some sort of access token in the future.
	}
};

export default userMutations;
