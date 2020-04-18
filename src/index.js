import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Container from "./components/Container/Main/Container";
import Login from "./components/loginGlb/Login";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route exact path="" component={Container} />
      <Route exact path="/" component={Container} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>,
  document.getElementById('container')
);

