/**
 * Index
 * Where it all begins
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';
import Async from 'react-code-splitting';

const Nav = () => (<Async load={import('./components/Nav')} />);
const Home = () => (<Async load={import('./views/home')} />);
const Countdown = () => (<Async load={import('./views/countdown')} />);

import backgroundImage from './assets/background.svg';

// Offline plugin

if (process.env.NODE_ENV === 'production') {
  const runtime = require('offline-plugin/runtime');

  runtime.install({
    onUpdateReady() {
      runtime.applyUpdate();
    },
    onUpdated() {
      window.location.reload();
    },
  });
}

injectGlobal`
html,
body {
  height: 100%;
  margin: 0;
}

html {
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  background-size: auto 256px;
}

* {
  box-sizing: border-box;
}
`;

const AppStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const App = () => (
  <Router>
    <AppStyles>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route path="/countdown" component={Countdown} />
    </AppStyles>
  </Router>
);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app-root'),
);
