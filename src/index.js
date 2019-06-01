import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleSheet/App.scss';
import {HashRouter} from 'react-router-dom';

ReactDOM.render (
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById ('root')
);
