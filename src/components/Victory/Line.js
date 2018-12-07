import React, { Component } from 'react';
import { VictoryBar } from 'victory';
import { ChartsWrapper } from './Bar';
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];
export default class Line extends Component {
  render() {
    return (
      <ChartsWrapper>
        <VictoryBar data={data} />
      </ChartsWrapper>
    );
  }
}
