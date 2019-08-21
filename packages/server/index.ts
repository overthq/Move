import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/', graphqlHTTP({ schema, qraphiql: true }));

app.listen(4000, () => `Server started at port 4000`);
