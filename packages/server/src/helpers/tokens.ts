import jwt from 'jsonwebtoken';

interface TokenPayload {
	id: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export const verifyAccessToken = async (token: string): string => {
	const verified = await jwt.verify(token);
};

export const signAccessToken = async (payload: TokenPayload) => {
	const accessToken = await jwt.sign();
};
