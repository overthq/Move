const User = `
	type User {
		_id: String!
		firstName: String!
		lastName: String!
		phoneNumber: String!
	}

	input LoginInput {
		phoneNumber: String!
	}

	input RegisterInput {
		firstName: String!
		lastName: String!
		phoneNumber: String!
	}

	extend type Query {
		verifyCode(code: String!): User!
	}

	extend type Mutation {
		login(input: LoginInput!): String!
		register(input: RegisterInput!): String!
	}
`;

export default User;
