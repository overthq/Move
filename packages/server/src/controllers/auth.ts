import { Request, Response, RequestHandler } from 'express';
import { User, VerificationCode } from '../models';
import {
	sendVerificationCode,
	createVerificationCode,
	signAccessToken
} from '../helpers';

export const logIn = async (req: Request, res: Response): Promise<Response> => {
	const { phoneNumber } = req.body;
	try {
		const user = await User.findOne({ phoneNumber });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'No user found with the provided email address.'
			});
		}

		const code = await createVerificationCode(phoneNumber);
		await sendVerificationCode(user.phoneNumber, code);

		return res.status(200).json({
			success: true,
			message: 'Successfully logged in.',
			user
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
};

export const validate: RequestHandler = async (req, res): Promise<Response> => {
	const { code } = req.body;
	try {
		const verificationCode = await VerificationCode.findOne({ code });
		if (!verificationCode || !verificationCode.code) {
			return res.status(404).json({
				success: false,
				message: 'No code exists with this address.'
			});
		}
		const user = await User.findOne({
			phoneNumber: verificationCode.phoneNumber
		});
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'No user found with specified details'
			});
		}
		const accessToken = await signAccessToken({
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
			phoneNumber: user.phoneNumber
		});
		return res.status(200).json({
			success: true,
			message: 'Phone number verified',
			accessToken
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
};

export const register: RequestHandler = async (req, res): Promise<Response> => {
	const { firstName, lastName, phoneNumber } = req.body;
	// Validate data being passed
	try {
		const user = new User({
			firstName,
			lastName,
			phoneNumber
		});

		const checkUser = await User.findOne({ phoneNumber });
		if (checkUser) {
			return res.status(409).json({
				success: 'false',
				message: 'User already registered with this phone number.'
			});
		}

		await user.save();

		const code = await createVerificationCode(phoneNumber);
		await sendVerificationCode(phoneNumber, code);

		return res.status(201).json({
			success: true,
			message: 'User created',
			user
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
};
