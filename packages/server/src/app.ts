import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => `Server started at port 4000`);
