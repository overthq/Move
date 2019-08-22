import { config } from 'dotenv';

config();

const { PORT, DB_URI } = process.env;

export { PORT, DB_URI };
