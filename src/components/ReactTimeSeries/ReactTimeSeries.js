import { TimeRange, TimeSeries } from 'pondjs';
import timerangeevent from 'pondjs/lib/lib/timerangeevent';
import React, { Component } from 'react';
import {
  ChartContainer,
  ChartRow,
  Charts,
  EventChart,
  Resizable,
} from 'react-timeseries-charts';
import styled from 'styled-components';

const ChartsWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
`;

//
// Test data
//

const outageEvents = [
  {
    startTime: '2015-03-08T09:00:00Z',
    endTime: '2015-03-22T14:00:00Z',
    title: 'ANL Scheduled Maintenance',
    description: 'ANL will be switching border routers...',
    completed: true,
    external_ticket: '',
    esnet_ticket: 'ESNET-20150302-002',
    organization: 'ANL',
    type: 'Planned',
  },
  {
    startTime: '2015-04-01T03:30:00Z',
    endTime: '2015-04-02T16:50:00Z',
    title: 'STAR-CR5 < 100 ge 06519 > ANL  - Outage',
    description: 'The listed circuit was unavailable due to bent pins.',
    completed: true,
    external_ticket: '3576:144',
    esnet_ticket: 'ESNET-20150421-013',
    organization: 'Internet2 / Level 3',
    type: 'Unplanned',
  },
  {
    startTime: '2015-04-22T03:30:00Z',
    endTime: '2015-04-22T13:00:00Z',
    description: 'At 13:33 pacific circuit 06519 went down.',
    title: 'STAR-CR5 < 100 ge 06519 > ANL  - Outage',
    completed: true,
    external_ticket: '',
    esnet_ticket: 'ESNET-20150421-013',
    organization: 'Internet2 / Level 3',
    type: 'Unplanned',
  },
];

//
// Turn data into TimeSeries
//

const events = outageEvents.map(
  ({ startTime, endTime, ...data }) =>
    new timerangeevent(
      new TimeRange(new Date(startTime), new Date(endTime)),
      data,
    ),
);
const series = new TimeSeries({ name: 'outages', events });

//
// Render event chart
//

function outageEventStyleFunc(event, state) {
  const color = event.get('type') === 'Planned' ? '#998ec3' : '#f1a340';
  switch (state) {
    case 'normal':
      return {
        fill: color,
      };
    case 'hover':
      return {
        fill: color,
        opacity: 0.4,
      };
    case 'selected':
      return {
        fill: color,
      };
    default:
    //pass
  }
}

export default class ReactTimeSeries extends Component {
  state = {
    tracker: null,
    timerange: series.timerange(),
    eventChartVisible: false,
  };
  toggleVisibility = which => {
    this.setState({ [which]: !this.state[which] });
  };
  handleTrackerChanged = tracker => {
    this.setState({ tracker });
  };
  handleTimeRangeChange = timerange => {
    this.setState({ timerange });
  };
  render() {
    return (
      <ChartsWrapper>
        <div>
          <h1>
            <a href="http://software.es.net/react-timeseries-charts/#/">
              React Timeseries Charts
            </a>
          </h1>
          <h3>
            uses <a href="http://software.es.net/pond/#/">pond.js</a> for
            handling time series data
          </h3>
        </div>
        <h4>
          <a href="http://software.es.net/react-timeseries-charts/#/api/charts/EventChart">
            EventChart
          </a>
        </h4>
        <div>
          <Resizable>
            <ChartContainer
              timeRange={this.state.timerange}
              enablePanZoom={true}
              onTimeRangeChanged={this.handleTimeRangeChange}
            >
              <ChartRow height="30">
                <Charts>
                  <EventChart
                    series={series}
                    size={45}
                    style={outageEventStyleFunc}
                    label={e => e.get('title')}
                  />
                </Charts>
              </ChartRow>
            </ChartContainer>
          </Resizable>
          <button onClick={() => this.toggleVisibility('eventChartVisible')}>
            {this.state.eventChartVisible ? 'Hide' : 'Show'} Source
          </button>
          {this.state.eventChartVisible && (
            <pre>
              <code>{`
//
// Test data
//

const outageEvents = [
  {
    startTime: '2015-03-08T09:00:00Z',
    endTime: '2015-03-22T14:00:00Z',
    title: 'ANL Scheduled Maintenance',
    description: 'ANL will be switching border routers...',
    completed: true,
    external_ticket: '',
    esnet_ticket: 'ESNET-20150302-002',
    organization: 'ANL',
    type: 'Planned',
  },
  {
    startTime: '2015-04-01T03:30:00Z',
    endTime: '2015-04-02T16:50:00Z',
    title: 'STAR-CR5 < 100 ge 06519 > ANL  - Outage',
    description: 'The listed circuit was unavailable due to bent pins.',
    completed: true,
    external_ticket: '3576:144',
    esnet_ticket: 'ESNET-20150421-013',
    organization: 'Internet2 / Level 3',
    type: 'Unplanned',
  },
  {
    startTime: '2015-04-22T03:30:00Z',
    endTime: '2015-04-22T13:00:00Z',
    description: 'At 13:33 pacific circuit 06519 went down.',
    title: 'STAR-CR5 < 100 ge 06519 > ANL  - Outage',
    completed: true,
    external_ticket: '',
    esnet_ticket: 'ESNET-20150421-013',
    organization: 'Internet2 / Level 3',
    type: 'Unplanned',
  },
];

//
// Turn data into TimeSeries
//

const events = outageEvents.map(
  ({ startTime, endTime, ...data }) =>
    new timerangeevent(
      new TimeRange(new Date(startTime), new Date(endTime)),
      data,
    ),
);
const series = new TimeSeries({ name: 'outages', events });

//
// Render event chart
//

function outageEventStyleFunc(event, state) {
  const color = event.get('type') === 'Planned' ? '#998ec3' : '#f1a340';
  switch (state) {
    case 'normal':
      return {
        fill: color,
      };
    case 'hover':
      return {
        fill: color,
        opacity: 0.4,
      };
    case 'selected':
      return {
        fill: color,
      };
    default:
    //pass
  }
}

export default class ReactTimeSeries extends Component {
  state = {
    tracker: null,
    timerange: series.timerange(),
    eventChartVisible: true,
  };
  toggleVisibility = which => {
    this.setState({ [which]: !this.state[which] });
  };
  handleTrackerChanged = tracker => {
    this.setState({ tracker });
  };
  handleTimeRangeChange = timerange => {
    this.setState({ timerange });
  };
      render() {
        return (
            <Resizable>
            <ChartContainer
              timeRange={this.state.timerange}
              enablePanZoom={true}
              onTimeRangeChanged={this.handleTimeRangeChange}
            >
              <ChartRow height="30">
                <Charts>
                  <EventChart
                    series={series}
                    size={45}
                    style={outageEventStyleFunc}
                    label={e => e.get('title')}
                  />
                </Charts>
              </ChartRow>
            </ChartContainer>
          </Resizable>
          `}</code>
            </pre>
          )}
        </div>
      </ChartsWrapper>
    );
  }
}
