import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([authLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

const authLink = setContext((_, { headers }) => {
    // Get the authentication token if it exists
    const token = "SFMyNTY.g2gDbQAAACQzZjhjNWUwMy04OWRmLTQ5YmQtODljNi01MDNkYjk2OThkYmRuBgAEeYq5kQFiAAFRgA.9Oc8bXVjs7DubZfIVfmH2bgrnpWuwUtWbGxLvfH9xjI";
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/api/graphql', // Replace with your GraphQL endpoint
  });

export const initializeApollo = () => {
  const _apolloClient = createApolloClient();
  return _apolloClient;
};

export const useApollo = () => {
  const store = useMemo(() => initializeApollo(), []);
  return store;
};
