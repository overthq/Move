import { VerificationCode } from '../models';

const sendVerificationCode = (phoneNumber: string, code: string) => {
	console.log(`Your phone number is ${phoneNumber}`);
	console.log(`Your verification code for Move is ${code}`);
	// TODO: Use Twilio API to send the 6 digit code
};

const createVerificationCode = async (phoneNumber: string): Promise<string> => {
	const code = Math.floor(100000 + Math.random() * 900000).toString();
	const verificationCode = new VerificationCode({ phoneNumber, code });
	await verificationCode.save();
	return code;
};

export { sendVerificationCode, createVerificationCode };
