export declare const AUTH_LOGIN =
	'\n  mutation Login($phoneNumber: String!) {\n    login(phoneNumber: $phoneNumber) {\n      message\n    }\n  }\n';
export declare const AUTH_REGISTER =
	'\n  mutation Register($phoneNumber: String!) {\n    register(phoneNumber: $phoneNumber) {\n      firstName\n      lastName\n    }\n  }\n';
