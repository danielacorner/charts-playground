import { Router } from '@reach/router';
import React, { Component } from 'react';
import ECharts from './components/ECharts/ECharts';
import GoogleCharts from './components/GoogleCharts/GoogleCharts';
import Nivo from './components/Nivo/Nivo';
import ReactTimeSeries from './components/ReactTimeSeries/ReactTimeSeries';
import Recharts from './components/Recharts/Recharts';
import Victory from './components/Victory/Victory';

export const routes = [
  { path: '/charts-playground/', name: 'Recharts' },
  { path: '/charts-playground/ECharts', name: 'ECharts' },
  { path: '/charts-playground/victory', name: 'Victory' },
  { path: '/charts-playground/timeseries', name: 'React Time Series' },
  { path: '/charts-playground/nivo', name: 'Nivo' },
  { path: '/charts-playground/google', name: 'Google Charts' },
];

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Recharts path="/charts-playground/" />
        <Victory path="/charts-playground/victory" />
        <ECharts path="/charts-playground/ECharts" />
        <ReactTimeSeries path="/charts-playground/timeseries" />
        <Nivo path="/charts-playground/nivo" />
        <GoogleCharts path="/charts-playground/google" />
      </Router>
    );
  }
}
