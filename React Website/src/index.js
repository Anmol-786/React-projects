import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
// import App from './Hooks';
// import Time from './Time';
// import Forms from './Forms';
// import Todo from './Todo';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom'
import './design.css';


ReactDOM.render(
  <>

  { <BrowserRouter>
  <Main/>
  </BrowserRouter> }

  </>
  ,document.getElementById('root')
)
