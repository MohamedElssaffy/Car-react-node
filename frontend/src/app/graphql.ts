import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_GQL_URL}/graphql`,
  cache: new InMemoryCache(),
});
