import mongoose from 'mongoose';
import { DB_URI } from './env';

mongoose.connect(DB_URI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => {
	throw new Error(error);
});

db.once('open', () => {
	console.log('Connected to database');
});
