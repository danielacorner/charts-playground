import { Router } from '@reach/router';
import RechartsLine from './components/Recharts/Line';
import React, { Component } from 'react';
import RechartsBar from './components/Recharts/Bar';

export const routes = [
  { path: '/', name: 'Recharts Line' },
  { path: '/rb', name: 'Recharts Bar' },
];

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <RechartsLine path="/" />
        <RechartsBar path="/rb" />
      </Router>
    );
  }
}
