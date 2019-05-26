import dotenv from 'dotenv';

dotenv.load();

const { PORT, DB_URI, ACCESS_TOKEN_SECRET } = process.env as {
	[key: string]: string;
};

export { PORT, DB_URI, ACCESS_TOKEN_SECRET };
