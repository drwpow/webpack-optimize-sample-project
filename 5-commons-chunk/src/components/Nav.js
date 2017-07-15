/**
 * Nav
 * It goes where you go
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default () => (
  <Nav>
    <NavLink><Link to="/">Artist Rendering</Link></NavLink>
    <NavLink><Link to="/countdown">Grand Opening</Link></NavLink>
  </Nav>
);
