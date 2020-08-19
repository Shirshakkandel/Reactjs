import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Reactjs wa
ReactDOM.render(
   <>
   <h1>Shirshak kandel Netflix pick </h1>
   <p>Here is my fav 5 netflix series</p>
   <ol>
      <li>Dark</li>
      <li>Mr robot</li>
      <li>My Holo Love</li>
      <li>Extracation</li>
      <li>Ganstar</li>
   </ol>
   </> 
   ,
    document.getElementById('root')
);



serviceWorker.unregister();
