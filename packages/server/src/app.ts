import express from 'express';
import cors from 'cors';
import { PORT } from './config/env';
import router from './routes';
import { notFoundMiddleware, errorMiddleware } from './middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);
app.use(errorMiddleware);
app.all('*', notFoundMiddleware);

app.listen(PORT, (): string => `Server listening on port ${PORT}.`);

export default app;
