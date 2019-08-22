export const AUTH_LOGIN = `
  mutation Login($phoneNumber: String!) {
		login(phoneNumber: $phoneNumber)
	}
`;

export const AUTH_REGISTER = `
  mutation Register($phoneNumber: String!) {
		register(phoneNumber: $phoneNumber)
	}
`;
