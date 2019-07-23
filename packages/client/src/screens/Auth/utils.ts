import { post } from '@move/core';

interface RegisterDetails {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}

interface CardDetails {
	userId: string;
	cardNumber: string;
	cvv: string;
	expiryMonth: string;
	expiryYear: string;
}

export const register = (details: RegisterDetails) => {
	post('auth/register', details);
};

export const logIn = (phoneNumber: string) => {
	post('auth/login', { phoneNumber });
};

export const tokenizeCard = (cardDetails: CardDetails) => {
	post('credit-cards/save', cardDetails);
};
