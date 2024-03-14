import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'tachyons';

import Footer from '../src/components/footer';
import Header from '../src/components/header';
import Home from '../src/pages/Home';
import Login from '../src/components/login';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Login />
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
