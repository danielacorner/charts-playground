import { Router } from '@reach/router';
import React, { Component } from 'react';
import ECharts from './components/ECharts/ECharts';
import Nivo from './components/Nivo/Nivo';
import ReactTimeSeries from './components/ReactTimeSeries/ReactTimeSeries';
import Recharts from './components/Recharts/Recharts';
import Victory from './components/Victory/Victory';

export const routes = [
  { path: '/', name: 'Recharts' },
  { path: '/eCharts', name: 'ECharts' },
  { path: '/victory', name: 'Victory' },
  { path: '/timeseries', name: 'React Time Series' },
  { path: '/nivo', name: 'Nivo' },
];

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Recharts path="/" />
        <Victory path="/victory" />
        <ECharts path="/eCharts" />
        <ReactTimeSeries path="/timeseries" />
        <Nivo path="/nivo" />
      </Router>
    );
  }
}
