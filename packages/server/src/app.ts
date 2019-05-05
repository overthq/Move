import express from 'express';

import { PORT } from './config/env';
import router from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(PORT, (): string => `Server listening on port ${PORT}.`);

export default app;
