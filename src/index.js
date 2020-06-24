import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PicApp from './PicApp.js'

ReactDOM.render(

 <PicApp/>, 

  document.getElementById('root'),

);
serviceWorker.unregister();
