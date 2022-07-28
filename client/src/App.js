import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
<<<<<<< HEAD
import Signup from './pages/Signup';
import InventoryList from './components/InventoryList';
=======
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
>>>>>>> 46c4a840bd4903f7a776d7d5278af7e78323a82e

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div>
        <Nav />
        <div>
        <Routes>
        <Route
          path='/'
          element={<Home/>}
          />
        <Route
          path='/InventoryList'
          element={<InventoryList/>}
          />
        <Route 
          path="/login" 
          element={<Login />} 
          />
        <Route 
          path="/signup" 
          element={<Signup />} 
          />
        </Routes>
        </div>

        <Footer />
      </div>
    </Router>
=======
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/thought/:id" 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
>>>>>>> 46c4a840bd4903f7a776d7d5278af7e78323a82e
  );
}

export default App;
