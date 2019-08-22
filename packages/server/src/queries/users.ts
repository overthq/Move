import { User, VerificationCode } from '../models';

const userQueries = {
	verifyCode: async (_, { code }) => {
		const verificationCode = await VerificationCode.findOne({ code });
		if (!verificationCode)
			throw new Error('The specified verification code does not exist.');
		if (verificationCode.code !== code)
			throw new Error('The verification code entered is invalid');
		const user = await User.findOne({
			phoneNumber: verificationCode.phoneNumber
		});
		if (!user) throw new Error('No user found with the specified details');
		return user; // This should obviously go along with some sort of access token in the future.
	}
};

export default userQueries;
