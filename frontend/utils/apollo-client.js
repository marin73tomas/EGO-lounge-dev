import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BACKEND_URL } from "../config";
const client = new ApolloClient({
  uri: BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;
