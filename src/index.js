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
      <Route exact path="/movie" component={Movie} />
      <Route exact path="/movies" component={Movies} />
    </Switch>
  </HashRouter>,
  document.getElementById('container')
);

