import React from 'react';

import { render } from 'react-dom';

import App from './App.js'

import {

  ApolloClient,

  InMemoryCache,

  ApolloProvider,

} from "@apollo/client";

const client = new ApolloClient({

  uri: 'https://48p1r2roz4.sse.codesandbox.io',

  cache: new InMemoryCache()

});






render(

  
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
    

  ,

  document.getElementById('root'),

);




