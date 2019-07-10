import dotenv from 'dotenv';

dotenv.config();

const {
	PORT,
	DB_URI,
	ACCESS_TOKEN_SECRET,
	RAVE_API_SECRET_KEY,
	RAVE_API_PUBLIC_KEY
} = process.env as {
	[key: string]: string;
};

export {
	PORT,
	DB_URI,
	ACCESS_TOKEN_SECRET,
	RAVE_API_SECRET_KEY,
	RAVE_API_PUBLIC_KEY
};
