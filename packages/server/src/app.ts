import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import './config/env';
import './config/database';

const app = express();

app.use('/', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => console.log(`Server started at port 4000`));
