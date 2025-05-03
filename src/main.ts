import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http'; //HTTP server
import { readFileSync } from 'fs';
const path = require('path');
import { makeExecutableSchema } from '@graphql-tools/schema';

import { Query } from './resolvers/Query';
import { Mutation } from './resolvers/Mutation';
import { Subscription } from './resolvers/Subscription';
import { Cv } from './resolvers/Cv';
import { context } from './context';

// Load schema
const typeDefs = readFileSync(
  path.join(__dirname, '../schema/schema.gql'),
  'utf-8',
);

// Create executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Subscription,
    Cv,
  },
});

const yoga = createYoga({
  schema,
  context: () => context,
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000/graphql');
});
