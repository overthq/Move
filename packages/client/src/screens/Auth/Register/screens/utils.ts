import { post } from '@move/core';

interface RegisterDetails {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export const register = async (details: RegisterDetails) => {
	await post('auth/register', details);
};
