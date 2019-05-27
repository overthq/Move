import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../config/env';

interface TokenPayload {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export const verifyAccessToken = async (
	token: string
): Promise<string | object> => {
	const verified = await jwt.verify(token, ACCESS_TOKEN_SECRET);
	return verified;
};

export const signAccessToken = async (
	payload: TokenPayload
): Promise<string> => {
	const accessToken = await jwt.sign(payload, ACCESS_TOKEN_SECRET);
	return accessToken;
};
