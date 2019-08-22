import mongoose from 'mongoose';
import { DB_URI } from './env';

mongoose.connect(DB_URI, {
	useCreateIndex: true,
	useNewUrlParser: true
});

const db = mongoose.connection;

db.once('open', () => {
	console.log('Connected to MongoDB!');
});

db.on('error', (error: Error) => {
	throw new Error(error.message);
});
