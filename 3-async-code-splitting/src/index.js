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

import Home from './views/home';
import Countdown from './views/countdown';

import backgroundImage from './assets/background.svg';

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

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 8, 16, 0.2);
  display: flex;
  margin-bottom: 32px;
  margin-left: 0;
  margin-right: 0;
  padding: 32px;
`;

const NavLink = styled.div`
  font-weight: 700;
  margin-left: 16px;
  margin-right: 16px;

  & a {
    color: #00ce67;
    text-decoration: none;
    transition: color 200ms;

    &:focus,
    &:hover {
      color: #00b85f;
    }
  }
`;

const App = () => (
  <Router>
    <AppStyles>
      <Nav>
        <NavLink><Link to="/">Artist Rendering</Link></NavLink>
        <NavLink><Link to="/countdown">Grand Opening</Link></NavLink>
      </Nav>

      <Route exact path="/" component={Home} />
      <Route path="/countdown" component={Countdown} />
    </AppStyles>
  </Router>
);

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app-root'),
);
