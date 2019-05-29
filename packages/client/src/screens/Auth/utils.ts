import { post } from '@move/core';

interface RegisterDetails {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

export const register = async (details: RegisterDetails) => {
	await post('auth/register', details);
};

export const logIn = async (phoneNumber: string) => {
	await post('auth/login', { phoneNumber });
};
