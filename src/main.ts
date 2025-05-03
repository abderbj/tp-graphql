import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { context } from "./context";
import { schema } from "./schema";

const yoga = createYoga({
  schema,
  context: () => context, 
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Server ready at http://localhost:4000/graphql");
});