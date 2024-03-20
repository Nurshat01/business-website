import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import 'bulma/css/bulma.min.css';

import Footer from '../src/components/footer';
import Header from '../src/components/header';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Header />
          <Outlet />
        <Footer />
    </ApolloProvider>
  );
}

export default App;
