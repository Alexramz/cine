import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Container from "./components/Container/Main/Container";
import Login from "./components/loginGlb/Login";
import Movie from "./components/movieGlb/Movie";
import SignUp from "./components/signUpGlb/SignUp";
import Movies from "./components/moviesGlb/movies";
const hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <Switch>
      <Route exact path="/" component={Container} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp}/>
      <Route exact strict path="/movie/:id" component={Movie} />
      <Route exact strict path="/movies/:id" component={Movies} />
    </Switch>
  </HashRouter>,
  document.getElementById('container')
);

