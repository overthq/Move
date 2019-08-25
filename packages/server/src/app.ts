import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';
import './config/env';
import './config/database';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => console.log(`Server started at port 4000`));
