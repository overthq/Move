import { post } from '../request';

const logIn = async (phoneNumber: string) => {
	const {} = await post('/auth/login', { phoneNumber });
};

const register = async (
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

const validate = async (code: string) => {
	const { success } = await post('/auth/register', { code });
	return success;
};

export default { logIn, register, validate };
