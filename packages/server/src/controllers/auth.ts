import ejs from 'ejs';
import { Request, Response } from 'express';
import { User, Code } from '../models';
import { sendMail } from '../helpers';

export const logIn = async (req: Request, res: Response): Promise<Response> => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: 'No user found with the provided email address.'
			});
		}
		const code = Math.floor(Math.random() * 999999) + 100000;
		// Save code to database
		const newCode = new Code({ email, code });
		await newCode.save();
		const html = await ejs.renderFile<string>('../templates/login.ejs', {
			user,
			code
		});
		// Use html to send email with nodemailer
		await sendMail('Log In | Move', user.email, html);

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
	const { email, code } = req.body;
	try {
		// Validate code authenticity
		// If code is valid, generate auth token
		// Delete code entry in the database
		const lCode = await Code.findOne({ email });
		if (!lCode) {
			return res.status(404).json({
				success: false,
				message: 'No code exists with this email e-mail address.'
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
	const { firstName, lastName, email } = req.body;
	try {
		const user = new User({
			firstName,
			lastName,
			email
		});
		await user.save();
		return res.status(201).json({
			success: true,
			message: 'User created'
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error.message
		});
	}
};
