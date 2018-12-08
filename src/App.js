import { Link } from '@reach/router';
import React, { Component } from 'react';
import styled from 'styled-components';
import AppRouter, { routes } from './AppRouter';
const AppWrapper = styled.div`
  padding: 0 20px;
  margin: auto;
  * {
    margin: 0;
  }
  pre {
    background: lightgrey;
  }
`;
const NavWrapper = styled.div`
  font-family: 'Open Sans';
  padding: 20px;
  display: grid;
  justify-items: center;
  background: lightgrey;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
`;

const Navbar = () => (
  <NavWrapper>
    {routes.map(route => (
      <Link to={route.path}>
        <a>{route.name}</a>
      </Link>
    ))}
  </NavWrapper>
);

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Navbar />
        <AppRouter />
      </AppWrapper>
    );
  }
}

export default App;
