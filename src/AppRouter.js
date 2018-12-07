import { Router } from '@reach/router';
import React, { Component } from 'react';
import RechartsBar from './components/Recharts/Bar';
import RechartsLine from './components/Recharts/Line';
import VictoryBar from './components/Victory/Bar';
import VictoryLine from './components/Victory/Line';

export const routes = [
  { path: '/', name: 'Recharts Line' },
  { path: '/rechartsBar', name: 'Recharts Bar' },
  { path: '/victoryLine', name: 'Victory Line' },
  { path: '/victoryBar', name: 'Victory Bar' },
];

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <RechartsLine path="/" />
        <RechartsBar path="/rechartsBar" />
        <VictoryLine path="/victoryLine" />
        <VictoryBar path="/victoryBar" />
      </Router>
    );
  }
}
