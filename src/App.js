import { Link } from '@reach/router';
import React, { Component } from 'react';
import styled from 'styled-components';
import AppRouter, { routes } from './AppRouter';
const AppWrapper = styled.div`
  padding: 100px 40px;
  margin: auto;
  * {
    margin: 0;
  }
  pre {
    background: lightgrey;
  }
`;
const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Open Sans';
  padding: 20px;
  display: grid;
  justify-items: center;
  background: lightgrey;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  a {
    text-decoration: none;
    color: steelblue;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      font-weight: bold;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppRouter />
        <NavWrapper>
          {routes.map(route => (
            <Link
              getProps={({ isCurrent }) =>
                isCurrent ? { className: 'active' } : null
              }
              to={route.path}
            >
              <a>{route.name}</a>
            </Link>
          ))}
        </NavWrapper>
      </AppWrapper>
    );
  }
}

export default App;
