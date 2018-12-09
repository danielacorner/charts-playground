import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';
const ChartsWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
`;
const timelineData = [
  [
    { type: 'string', id: 'Position' },
    { type: 'string', id: 'Name' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ],
  [
    'President',
    'George Washington',
    new Date(1789, 3, 30),
    new Date(1797, 2, 4),
  ],
  ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
  ['President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ['Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
  [
    'Vice President',
    'Thomas Jefferson',
    new Date(1797, 2, 4),
    new Date(1801, 2, 4),
  ],
  ['Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
  [
    'Vice President',
    'George Clinton',
    new Date(1805, 2, 4),
    new Date(1812, 3, 20),
  ],
  [
    'Secretary of State',
    'John Jay',
    new Date(1789, 8, 25),
    new Date(1790, 2, 22),
  ],
  [
    'Secretary of State',
    'Thomas Jefferson',
    new Date(1790, 2, 22),
    new Date(1793, 11, 31),
  ],
  [
    'Secretary of State',
    'Edmund Randolph',
    new Date(1794, 0, 2),
    new Date(1795, 7, 20),
  ],
  [
    'Secretary of State',
    'Timothy Pickering',
    new Date(1795, 7, 20),
    new Date(1800, 4, 12),
  ],
  [
    'Secretary of State',
    'Charles Lee',
    new Date(1800, 4, 13),
    new Date(1800, 5, 5),
  ],
  [
    'Secretary of State',
    'John Marshall',
    new Date(1800, 5, 13),
    new Date(1801, 2, 4),
  ],
  [
    'Secretary of State',
    'Levi Lincoln',
    new Date(1801, 2, 5),
    new Date(1801, 4, 1),
  ],
  [
    'Secretary of State',
    'James Madison',
    new Date(1801, 4, 2),
    new Date(1809, 2, 3),
  ],
];
export default class GoogleCharts extends Component {
  state = {
    timeline: false,
    data: false,
  };
  toggleVisibility = which => {
    this.setState({ [which]: !this.state[which] });
  };
  render() {
    return (
      <ChartsWrapper>
        <div>
          <h1>
            <a href="https://react-google-charts.com/">React Google Charts</a>
          </h1>
        </div>
        <h4>
          <a href="https://react-google-charts.com/timeline-chart">
            timeline chart
          </a>
        </h4>
        <div>
          <Chart
            width={'100%'}
            height={'200px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={timelineData}
            rootProps={{ 'data-testid': '3' }}
          />
          <button onClick={() => this.toggleVisibility('timeline')}>
            {this.state.timeline ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline && (
            <pre>
              <code>{`
<Chart
  width={'100%'}
  height={'200px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={timelineData}
  rootProps={{ 'data-testid': '3' }}
/>            `}</code>
            </pre>
          )}
          <button onClick={() => this.toggleVisibility('data')}>
            {this.state.data ? 'Hide' : 'Show'} Data
          </button>
          {this.state.data && (
            <pre>
              <code>{`
const timelineData = [
  [
    { type: 'string', id: 'Position' },
    { type: 'string', id: 'Name' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ],
  [
    'President',
    'George Washington',
    new Date(1789, 3, 30),
    new Date(1797, 2, 4),
  ],
  ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
  ['President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ['Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
  [
    'Vice President',
    'Thomas Jefferson',
    new Date(1797, 2, 4),
    new Date(1801, 2, 4),
  ],
  ['Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
  [
    'Vice President',
    'George Clinton',
    new Date(1805, 2, 4),
    new Date(1812, 3, 20),
  ],
  [
    'Secretary of State',
    'John Jay',
    new Date(1789, 8, 25),
    new Date(1790, 2, 22),
  ],
  [
    'Secretary of State',
    'Thomas Jefferson',
    new Date(1790, 2, 22),
    new Date(1793, 11, 31),
  ],
  [
    'Secretary of State',
    'Edmund Randolph',
    new Date(1794, 0, 2),
    new Date(1795, 7, 20),
  ],
  [
    'Secretary of State',
    'Timothy Pickering',
    new Date(1795, 7, 20),
    new Date(1800, 4, 12),
  ],
  [
    'Secretary of State',
    'Charles Lee',
    new Date(1800, 4, 13),
    new Date(1800, 5, 5),
  ],
  [
    'Secretary of State',
    'John Marshall',
    new Date(1800, 5, 13),
    new Date(1801, 2, 4),
  ],
  [
    'Secretary of State',
    'Levi Lincoln',
    new Date(1801, 2, 5),
    new Date(1801, 4, 1),
  ],
  [
    'Secretary of State',
    'James Madison',
    new Date(1801, 4, 2),
    new Date(1809, 2, 3),
  ],
];            `}</code>
            </pre>
          )}
        </div>
      </ChartsWrapper>
    );
  }
}
