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
	mutation VerifyCode(
		$phoneNumber: String!
		$code: String!
	) {
		verifyCode(
			phoneNumber: $phoneNumber
			code: $code
		) {
			_id
			firstName
			lastName
			phoneNumber
		}
	}
`;
