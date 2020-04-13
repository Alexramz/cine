import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Container from "./components/Container/Main/Container";


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);*/
ReactDOM.render(
  <Container/>,
  document.getElementById('container')
);
/*ReactDOM.render(
  <Container/>,
  document.getElementById('container')
);*/


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
