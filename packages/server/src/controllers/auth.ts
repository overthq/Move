import { Request, Response } from 'express';
import { User, Code } from '../models';

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
		const code = Math.floor(100000 + Math.random() * 900000);

		const newCode = new Code({ phoneNumber, code });
		await newCode.save();

		// TODO: Send the code in a text message with Twilio.

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

// TODO: Create route for actually logging in

export const validateLogin = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { phoneNumber, code } = req.body;
	try {
		const lCode = await Code.findOne({ phoneNumber });
		if (!lCode) {
			return res.status(404).json({
				success: false,
				message: 'No code exists with this address.'
			});
		}
		if (lCode.code === code) {
			return res.status(200).json({
				success: true,
				message: 'Valid code',
				accessToken: 'xxxxx-xxxxx-xxxxx-xxxxxx'
			});
		}
		return res.status(200);
	} catch (error) {
		return res.status(500);
	}
};

export const register = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { firstName, lastName, phoneNumber } = req.body;
	// Validate data being passed
	try {
		const user = new User({
			firstName,
			lastName,
			phoneNumber
		});
		await user.save();

		// Send code to the phoneNumber
		// To verify authenticity

		return res.status(201).json({
			success: true,
			message: 'User created',
			user
			// We should probably return the accessToken and refreshToken only
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
};
