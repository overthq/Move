import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

app.use('/', graphqlHTTP({ qraphiql: true }));

app.listen(4000, () => `Server started at port 4000`);
