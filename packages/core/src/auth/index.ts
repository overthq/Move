import { post } from '../request';

export const logIn = async (phoneNumber: string) => {
	const {} = await post('/auth/login', { phoneNumber });
};

export const register = async (
	firstName: string,
	lastName: string,
	phoneNumber: string
) => {
	const {} = await post('/auth/register', {
		firstName,
		lastName,
		phoneNumber
	});
};

export const validate = async (code: string) => {
	const { success } = await post('/auth/register', { code });
	return success;
};
