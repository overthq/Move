import nodemailer from 'nodemailer';

const sendMail = async (
	subject: string,
	to: string,
	html?: string
): Promise<void> => {
	try {
		const testAccount = await nodemailer.createTestAccount();
		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false,
			auth: {
				user: testAccount.user,
				pass: testAccount.pass
			}
		});

		const info = await transporter.sendMail({
			from: '"Move" <move@overt.dev>',
			to,
			subject,
			html
		});

		console.log('Message sent: %s', info.messageId);
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	} catch (error) {
		console.error(error);
	}
};

export default sendMail;
