'use strict';

import express from 'express';
import GraphQLHTTP from 'express-graphql';
import Schema from './schema';
import db from './db';

const app = express();

app.use('/graphql', GraphQLHTTP ({
  schema: Schema,
  pretty: true,
  graphiql: true,
}));

app.listen(
  8000,
  () => console.log('GraphQL Server running at http://localhost:8000')
)