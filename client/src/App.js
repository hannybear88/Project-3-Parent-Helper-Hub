import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Schools from './pages/Schools';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider  client={client}>
       <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Welcome />} 
          />
          <Route 
            path='/login' 
            element={<Login />} 
          />
          <Route 
            path='/signup' 
            element={<Signup />} 
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/schools'
            element={<Schools />}
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  </ApolloProvider>
 
  );
}

export default App;
