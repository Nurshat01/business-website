// import React from "react";
import "./App.css";
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import "tachyons";
import Home from "../src/pages/Home";
import Footer from "../src/components/footer";
import Header from "../src/components/header";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// };

const client = new ApolloClient({
  uri: 'http://localhost:3001//graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
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
