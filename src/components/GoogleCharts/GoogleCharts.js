import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';
const ChartsWrapper = styled.div`
  display: grid;
  grid-gap: 90px;
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
    timeline1: false,
    timeline2: false,
    timeline3: false,
    timeline4: false,
    timeline5: false,
    timeline6: false,
    timeline7: false,
    data: false,
    bar1: false,
    bar2: false,
    bar3: false,
    bar4: false,
    bar5: false,
    bar6: false,
    calendar: false,
    combo: false,
    stepped1: false,
    stepped2: false,
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
        <div>
          <h2>
            <a href="https://react-google-charts.com/timeline-chart">
              timeline chart
            </a>
          </h2>
          <Chart
            width={'100%'}
            height={'200px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={timelineData}
            rootProps={{ 'data-testid': '3' }}
          />
          <button onClick={() => this.toggleVisibility('timeline1')}>
            {this.state.timeline1 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline1 && (
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
        <div>
          <h2>Simple Timeline</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'string', id: 'President' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
              ],
              ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
              ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
              ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
            ]}
            options={{
              showRowNumber: true,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <button onClick={() => this.toggleVisibility('timeline2')}>
            {this.state.timeline2 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline2 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'President' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
    ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ]}
  options={{
    showRowNumber: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Labeled Timeline</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'string', id: 'Term' },
                { type: 'string', id: 'Name' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
              ],
              [
                '1',
                'George Washington',
                new Date(1789, 3, 30),
                new Date(1797, 2, 4),
              ],
              ['2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
              [
                '3',
                'Thomas Jefferson',
                new Date(1801, 2, 4),
                new Date(1809, 2, 4),
              ],
            ]}
            rootProps={{ 'data-testid': '2' }}
          />
          <button onClick={() => this.toggleVisibility('timeline3')}>
            {this.state.timeline3 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline3 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'Term' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    ['1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
    ['2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ['3', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ]}
  rootProps={{ 'data-testid': '2' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Putting bars on one row</h2>
          <Chart
            width={'100%'}
            height={'200px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
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
              [
                'President',
                'John Adams',
                new Date(1797, 2, 4),
                new Date(1801, 2, 4),
              ],
              [
                'President',
                'Thomas Jefferson',
                new Date(1801, 2, 4),
                new Date(1809, 2, 4),
              ],
            ]}
            options={{
              timeline: {
                groupByRowLabel: false,
              },
            }}
            rootProps={{ 'data-testid': '4' }}
          />
          <button onClick={() => this.toggleVisibility('timeline4')}>
            {this.state.timeline4 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline4 && (
            <pre>
              <code>{`
<Chart
  width={'100%'}
  height={'200px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
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
    [
      'President',
      'Thomas Jefferson',
      new Date(1801, 2, 4),
      new Date(1809, 2, 4),
    ],
  ]}
  options={{
    timeline: {
      groupByRowLabel: false,
    },
  }}
  rootProps={{ 'data-testid': '4' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Controlling the Colours</h2>
          <Chart
            width={'100%'}
            height={'200px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'string', id: 'Room' },
                { type: 'string', id: 'Name' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
              ],
              [
                'Magnolia Room',
                'Beginning JavaScript',
                new Date(0, 0, 0, 12, 0, 0),
                new Date(0, 0, 0, 13, 30, 0),
              ],
              [
                'Magnolia Room',
                'Intermediate JavaScript',
                new Date(0, 0, 0, 14, 0, 0),
                new Date(0, 0, 0, 15, 30, 0),
              ],
              [
                'Magnolia Room',
                'Advanced JavaScript',
                new Date(0, 0, 0, 16, 0, 0),
                new Date(0, 0, 0, 17, 30, 0),
              ],
              [
                'Willow Room',
                'Beginning Google Charts',
                new Date(0, 0, 0, 12, 30, 0),
                new Date(0, 0, 0, 14, 0, 0),
              ],
              [
                'Willow Room',
                'Intermediate Google Charts',
                new Date(0, 0, 0, 14, 30, 0),
                new Date(0, 0, 0, 16, 0, 0),
              ],
              [
                'Willow Room',
                'Advanced Google Charts',
                new Date(0, 0, 0, 16, 30, 0),
                new Date(0, 0, 0, 18, 0, 0),
              ],
            ]}
            options={{
              timeline: {
                colorByRowLabel: true,
              },
            }}
            rootProps={{ 'data-testid': '5' }}
          />
          <button onClick={() => this.toggleVisibility('timeline5')}>
            {this.state.timeline5 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline5 && (
            <pre>
              <code>{`
<Chart
  width={'100%'}
  height={'200px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'Room' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    [
      'Magnolia Room',
      'Beginning JavaScript',
      new Date(0, 0, 0, 12, 0, 0),
      new Date(0, 0, 0, 13, 30, 0),
    ],
    [
      'Magnolia Room',
      'Intermediate JavaScript',
      new Date(0, 0, 0, 14, 0, 0),
      new Date(0, 0, 0, 15, 30, 0),
    ],
    [
      'Magnolia Room',
      'Advanced JavaScript',
      new Date(0, 0, 0, 16, 0, 0),
      new Date(0, 0, 0, 17, 30, 0),
    ],
    [
      'Willow Room',
      'Beginning Google Charts',
      new Date(0, 0, 0, 12, 30, 0),
      new Date(0, 0, 0, 14, 0, 0),
    ],
    [
      'Willow Room',
      'Intermediate Google Charts',
      new Date(0, 0, 0, 14, 30, 0),
      new Date(0, 0, 0, 16, 0, 0),
    ],
    [
      'Willow Room',
      'Advanced Google Charts',
      new Date(0, 0, 0, 16, 30, 0),
      new Date(0, 0, 0, 18, 0, 0),
    ],
  ]}
  options={{
    timeline: {
      // singleColor: '#8d8', // same colour for all bars
      colorByRowLabel: true,
    },
    // backgroundColor: '#ffd',
    // colors: ['#cbb69d', '#603913', '#c69c6e'], // set individual colors for bars

  }}
  rootProps={{ 'data-testid': '5' }}
/>`}</code>
            </pre>
          )}
        </div>

        <div>
          <h2>Overlapping GridLines</h2>
          <Chart
            width={'100%'}
            height={'200px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'string', id: 'Room' },
                { type: 'string', id: 'Name' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
              ],
              [
                'Magnolia Room',
                'Google Charts',
                new Date(0, 0, 0, 14, 0, 0),
                new Date(0, 0, 0, 15, 0, 0),
              ],
              [
                'Magnolia Room',
                'App Engine',
                new Date(0, 0, 0, 15, 0, 0),
                new Date(0, 0, 0, 16, 0, 0),
              ],
            ]}
            options={{
              timeline: { showRowLabels: false },
              avoidOverlappingGridLines: false,
            }}
            rootProps={{ 'data-testid': '9' }}
          />
          <button onClick={() => this.toggleVisibility('timeline6')}>
            {this.state.timeline6 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline6 && (
            <pre>
              <code>{`
<Chart
  width={'100%'}
  height={'200px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'Room' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    [
      'Magnolia Room',
      'Google Charts',
      new Date(0, 0, 0, 14, 0, 0),
      new Date(0, 0, 0, 15, 0, 0),
    ],
    [
      'Magnolia Room',
      'App Engine',
      new Date(0, 0, 0, 15, 0, 0),
      new Date(0, 0, 0, 16, 0, 0),
    ],
  ]}
  options={{
    timeline: { showRowLabels: false },
    avoidOverlappingGridLines: false,
  }}
  rootProps={{ 'data-testid': '9' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Customizing Tooltips</h2>
          <Chart
            width={'100%'}
            height={'200px'}
            chartType="Timeline"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'string', id: 'President' },
                { type: 'string', id: 'dummy bar label' },
                { type: 'string', role: 'tooltip' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
              ],
              [
                'Washington',
                null,
                'George',
                new Date(1789, 3, 29),
                new Date(1797, 2, 3),
              ],
              [
                'Adams',
                null,
                'John',
                new Date(1797, 2, 3),
                new Date(1801, 2, 3),
              ],
              [
                'Jefferson',
                null,
                'Thomas',
                new Date(1801, 2, 3),
                new Date(1809, 2, 3),
              ],
            ]}
            options={{
              allowHtml: true,
            }}
            rootProps={{ 'data-testid': '10' }}
          />
          <button onClick={() => this.toggleVisibility('timeline7')}>
            {this.state.timeline7 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.timeline7 && (
            <pre>
              <code>{`
<Chart
  width={'100%'}
  height={'200px'}
  chartType="Timeline"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', id: 'President' },
      { type: 'string', id: 'dummy bar label' },
      { type: 'string', role: 'tooltip' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    [
      'Washington',
      null,
      'George',
      new Date(1789, 3, 29),
      new Date(1797, 2, 3),
    ],
    ['Adams', null, 'John', new Date(1797, 2, 3), new Date(1801, 2, 3)],
    ['Jefferson', null, 'Thomas', new Date(1801, 2, 3), new Date(1809, 2, 3)],
  ]}
  options={{
    allowHtml: true,
  }}
  rootProps={{ 'data-testid': '10' }}
/>`}</code>
            </pre>
          )}
        </div>

        <div>
          <h2>Basic bar chart with multiple series</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles, CA', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000],
              ['Houston, TX', 2099000, 1953000],
              ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
              title: 'Population of Largest U.S. Cities',
              chartArea: { width: '50%' },
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'City',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
          />
          <button onClick={() => this.toggleVisibility('bar1')}>
            {this.state.bar1 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.bar1 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ]}
  options={{
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/>`}</code>
            </pre>
          )}
        </div>

        <div>
          <h2>Material Design</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ['Year', 'Sales', 'Expenses', 'Profit'],
              ['2014', 1000, 400, 200],
              ['2015', 1170, 460, 250],
              ['2016', 660, 1120, 300],
              ['2017', 1030, 540, 350],
            ]}
            options={{
              // Material design options
              chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
          />
          <button onClick={() => this.toggleVisibility('bar2')}>
            {this.state.bar2 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.bar2 && (
            <pre>
              <code>{`
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ['Year', 'Sales', 'Expenses', 'Profit'],
              ['2014', 1000, 400, 200],
              ['2015', 1170, 460, 250],
              ['2016', 660, 1120, 300],
              ['2017', 1030, 540, 350],
            ]}
            options={{
              // Material design options
              chart: {
                title: 'Company Performance',
                subtitle: 'Sales, Expenses, and Profit: 2014-2017',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
          />`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Stacked bar chart with multiple series</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles, CA', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000],
              ['Houston, TX', 2099000, 1953000],
              ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
              title: 'Population of Largest U.S. Cities',
              chartArea: { width: '50%' },
              isStacked: true,
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'City',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '3' }}
          />
          <button onClick={() => this.toggleVisibility('bar3')}>
            {this.state.bar3 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.bar3 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ]}
  options={{
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    isStacked: true,
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '3' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Customizable Bar Colors</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles, CA', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000],
              ['Houston, TX', 2099000, 1953000],
              ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
              title: 'Population of Largest U.S. Cities',
              chartArea: { width: '50%' },
              colors: ['#b0120a', '#ffab91'],
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'City',
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '4' }}
          />
          <button onClick={() => this.toggleVisibility('bar4')}>
            {this.state.bar4 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.bar4 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ]}
  options={{
    title: 'Population of Largest U.S. Cities',
    chartArea: { width: '50%' },
    colors: ['#b0120a', '#ffab91'],
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '4' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Right Y axis</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            // Note here we use Bar instead of BarChart to load the material design version
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles, CA', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000],
              ['Houston, TX', 2099000, 1953000],
              ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
              // Material chart options
              chart: {
                title: 'Population of Largest U.S. Cities',
                subtitle: 'Based on most recent and previous census data',
              },
              hAxis: {
                title: 'Total Population',
                minValue: 0,
              },
              vAxis: {
                title: 'City',
              },
              bars: 'horizontal',
              axes: {
                y: {
                  0: { side: 'right' },
                },
              },
            }}
            // For tests
            rootProps={{ 'data-testid': '5' }}
          />
          <button onClick={() => this.toggleVisibility('bar5')}>
            {this.state.bar5 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.bar5 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  // Note here we use Bar instead of BarChart to load the material design version
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['City', '2010 Population', '2000 Population'],
    ['New York City, NY', 8175000, 8008000],
    ['Los Angeles, CA', 3792000, 3694000],
    ['Chicago, IL', 2695000, 2896000],
    ['Houston, TX', 2099000, 1953000],
    ['Philadelphia, PA', 1526000, 1517000],
  ]}
  options={{
    // Material chart options
    chart: {
      title: 'Population of Largest U.S. Cities',
      subtitle: 'Based on most recent and previous census data',
    },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: 'City',
    },
    bars: 'horizontal',
    axes: {
      y: {
        0: { side: 'right' },
      },
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '5' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Labeling Bars</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Element',
                'Density',
                { role: 'style' },
                {
                  sourceColumn: 0,
                  role: 'annotation',
                  type: 'string',
                  calc: 'stringify',
                },
              ],
              ['Copper', 8.94, '#b87333', null],
              ['Silver', 10.49, 'silver', null],
              ['Gold', 19.3, 'gold', null],
              ['Platinum', 21.45, 'color: #e5e4e2', null],
            ]}
            options={{
              title: 'Density of Precious Metals, in g/cm^3',
              width: 600,
              height: 400,
              bar: { groupWidth: '95%' },
              legend: { position: 'none' },
            }}
            // For tests
            rootProps={{ 'data-testid': '6' }}
          />
          <button
            style={{ marginTop: '120px' }}
            onClick={() => this.toggleVisibility('bar6')}
          >
            {this.state.bar6 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.bar6 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Element',
      'Density',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ],
    ['Copper', 8.94, '#b87333', null],
    ['Silver', 10.49, 'silver', null],
    ['Gold', 19.3, 'gold', null],
    ['Platinum', 21.45, 'color: #e5e4e2', null],
  ]}
  options={{
    title: 'Density of Precious Metals, in g/cm^3',
    width: 600,
    height: 400,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  }}
  // For tests
  rootProps={{ 'data-testid': '6' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Calendar Chart</h2>
          <Chart
            width={1000}
            height={350}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={[
              [
                { type: 'date', id: 'Date' },
                { type: 'number', id: 'Won/Loss' },
              ],
              [new Date(2012, 3, 13), 37032],
              [new Date(2012, 3, 14), 38024],
              [new Date(2012, 3, 15), 38024],
              [new Date(2012, 3, 16), 38108],
              [new Date(2012, 3, 17), 38229],

              [new Date(2013, 1, 4), 38177],
              [new Date(2013, 1, 5), 38705],
              [new Date(2013, 1, 12), 38210],
              [new Date(2013, 1, 13), 38029],
              [new Date(2013, 1, 19), 38823],
              [new Date(2013, 1, 23), 38345],
              [new Date(2013, 1, 24), 38436],
              [new Date(2013, 2, 10), 38447],
            ]}
            options={{
              title: 'Red Sox Attendance',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <button
            style={{ marginTop: '120px' }}
            onClick={() => this.toggleVisibility('calendar')}
          >
            {this.state.calendar ? 'Hide' : 'Show'} Source
          </button>
          {this.state.calendar && (
            <pre>
              <code>{`
<Chart
  width={1000}
  height={350}
  chartType="Calendar"
  loader={<div>Loading Chart</div>}
  data={[
    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],

    [new Date(2013, 1, 4), 38177],
    [new Date(2013, 1, 5), 38705],
    [new Date(2013, 1, 12), 38210],
    [new Date(2013, 1, 13), 38029],
    [new Date(2013, 1, 19), 38823],
    [new Date(2013, 1, 23), 38345],
    [new Date(2013, 1, 24), 38436],
    [new Date(2013, 2, 10), 38447],
  ]}
  options={{
    title: 'Red Sox Attendance',
  }}
  rootProps={{ 'data-testid': '1' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Combo Chart</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="ComboChart"
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Month',
                'Bolivia',
                'Ecuador',
                'Madagascar',
                'Papua New Guinea',
                'Rwanda',
                'Average',
              ],
              ['2004/05', 165, 938, 522, 998, 450, 614.6],
              ['2005/06', 135, 1120, 599, 1268, 288, 682],
              ['2006/07', 157, 1167, 587, 807, 397, 623],
              ['2007/08', 139, 1110, 615, 968, 215, 609.4],
              ['2008/09', 136, 691, 629, 1026, 366, 569.6],
            ]}
            options={{
              title: 'Monthly Coffee Production by Country',
              vAxis: { title: 'Cups' },
              hAxis: { title: 'Month' },
              seriesType: 'bars',
              series: { 5: { type: 'line' } },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <button
            style={{ marginTop: '120px' }}
            onClick={() => this.toggleVisibility('combo')}
          >
            {this.state.combo ? 'Hide' : 'Show'} Source
          </button>
          {this.state.combo && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="ComboChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Month',
      'Bolivia',
      'Ecuador',
      'Madagascar',
      'Papua New Guinea',
      'Rwanda',
      'Average',
    ],
    ['2004/05', 165, 938, 522, 998, 450, 614.6],
    ['2005/06', 135, 1120, 599, 1268, 288, 682],
    ['2006/07', 157, 1167, 587, 807, 397, 623],
    ['2007/08', 139, 1110, 615, 968, 215, 609.4],
    ['2008/09', 136, 691, 629, 1026, 366, 569.6],
  ]}
  options={{
    title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } },
  }}
  rootProps={{ 'data-testid': '1' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>Stepped Area Chart</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="SteppedAreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],
              ['Alfred Hitchcock (1935)', 8.4, 7.9],
              ['Ralph Thomas (1959)', 6.9, 6.5],
              ['Don Sharp (1978)', 6.5, 6.4],
              ['James Hawes (2008)', 4.4, 6.2],
            ]}
            options={{
              title: "The decline of 'The 39 Steps'",
              vAxis: { title: 'Accumulated Rating' },
              isStacked: true,
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <button
            style={{ marginTop: '120px' }}
            onClick={() => this.toggleVisibility('stepped1')}
          >
            {this.state.stepped1 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.stepped1 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="SteppedAreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Director (Year)', 'Rotten Tomatoes', 'IMDB'],
    ['Alfred Hitchcock (1935)', 8.4, 7.9],
    ['Ralph Thomas (1959)', 6.9, 6.5],
    ['Don Sharp (1978)', 6.5, 6.4],
    ['James Hawes (2008)', 4.4, 6.2],
  ]}
  options={{
    title: "The decline of 'The 39 Steps'",
    vAxis: { title: 'Accumulated Rating' },
    isStacked: true,
  }}
  rootProps={{ 'data-testid': '1' }}
/>`}</code>
            </pre>
          )}
        </div>
        <div>
          <h2>100 Percent Stacked Stepped Area</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Style', 'Colonial', 'Victorian', 'Modern', 'Contemporary'],
              ['2013', 5.2, 3.6, 2.8, 2],
              ['2014', 5.6, 4.0, 2.8, 3],
              ['2015', 7.2, 2.2, 2.2, 6.0],
              ['2016', 8.0, 1.7, 0.8, 4.0],
            ]}
            options={{
              isStacked: 'relative',
              height: 300,
              legend: { position: 'top', maxLines: 3 },
              vAxis: {
                minValue: 0,
                ticks: [0, 0.3, 0.6, 0.9, 1],
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
          <button
            style={{ marginTop: '120px' }}
            onClick={() => this.toggleVisibility('stepped1')}
          >
            {this.state.stepped1 ? 'Hide' : 'Show'} Source
          </button>
          {this.state.stepped1 && (
            <pre>
              <code>{`
<Chart
  width={'500px'}
  height={'300px'}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Style', 'Colonial', 'Victorian', 'Modern', 'Contemporary'],
    ['2013', 5.2, 3.6, 2.8, 2],
    ['2014', 5.6, 4.0, 2.8, 3],
    ['2015', 7.2, 2.2, 2.2, 6.0],
    ['2016', 8.0, 1.7, 0.8, 4.0],
  ]}
  options={{
    isStacked: 'relative',
    height: 300,
    legend: { position: 'top', maxLines: 3 },
    vAxis: {
      minValue: 0,
      ticks: [0, 0.3, 0.6, 0.9, 1],
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>`}</code>
            </pre>
          )}
        </div>
      </ChartsWrapper>
    );
  }
}
