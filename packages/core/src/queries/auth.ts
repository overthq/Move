export const AUTH_LOGIN = `
  mutation Login($phoneNumber: String!) {
		login(input: { phoneNumber: $phoneNumber })
	}
`;

export const AUTH_REGISTER = `
	mutation Register(
		$firstName: String!
		$lastName: String!
		$phoneNumber: String!
	) {
		register(
			firstName: $firstName,
			lastName: $lastName,
			phoneNumber: $phoneNumber
		)
	}
`;

export const AUTH_VERIFY_CODE = `
	mutation VerifyCode($code: String!) {
		verifyCode(code: $code) {
			firstName
			lastName
			phoneNumber
		}
	}
`;
