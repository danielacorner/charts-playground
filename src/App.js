import React, { Component } from 'react';
import AppRouter from './AppRouter';
import { Link } from '@reach/router';
import styled from 'styled-components';
import { routes } from './AppRouter';
const AppWrapper = styled.div`
  padding: 0 20px;
  margin: auto;
  max-width: 800px;
`;
const NavWrapper = styled.div`
  font-family: 'Open Sans';
  padding: 20px;
  display: grid;
  background: lightgrey;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
