import GlobalStyle from 'components/GlobalStyle.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<React.StrictMode>
    
    <Router basename={process.env.PUBLIC_URL}>
      <Routes />
    </Router>
    
  //</React.StrictMode>
);

