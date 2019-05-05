import { Request, Response } from 'express';
import { User } from '../models';
import { comparePasswords } from '../helpers';

export const logIn = async (req: Request, res: Response): Promise<Response> => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'No user found with the provided email address.'
			});
		}
		const isMatch = await comparePasswords(password, user.password);
		if (!isMatch) {
			return res.status(401).json({
				success: false,
				message: 'Incorrect username or password'
			});
		}
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

export const register = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		return res.status(200);
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
};
