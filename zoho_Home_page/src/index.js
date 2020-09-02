import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Main from './Main';

ReactDOM.render(
  <>
  <BrowserRouter>
  <Main/>
  </BrowserRouter>
  </>
  ,document.getElementById('root')
)