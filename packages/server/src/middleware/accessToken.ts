import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from '../helpers';

interface TokenRequest extends Request {
	decoded: string;
}

export const accessTokenMiddleware = async (
	req: TokenRequest,
	res: Response,
	next: NextFunction
) => {
	if (!req.headers.authorization) {
		return res.status(401).json({
			success: false,
			message: 'You are not authorized to visit this route'
		});
	}
	const token = req.headers.authorization.split(' ')[1];
	const decoded = await verifyAccessToken(token);
	if (!token || !decoded) {
		return res.status(401).json({
			success: false,
			message: 'Invalid authorization token'
		});
	}
	req.decoded = decoded;
	next();
};
