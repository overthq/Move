import dotenv from 'dotenv';

dotenv.load();

const { PORT, DB_URI } = process.env;

export { PORT, DB_URI };
