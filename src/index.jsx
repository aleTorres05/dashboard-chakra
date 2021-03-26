import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
reportWebVitals();
