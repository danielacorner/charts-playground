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
import Bar from './Bar';
import Realtime from './Realtime';

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
    realtimeChartVisible: false,
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
        <div>
          <h4>
            <a href="http://software.es.net/react-timeseries-charts/#/api/charts/EventChart">
              Realtime chart
            </a>
          </h4>

          <Realtime />
          <button onClick={() => this.toggleVisibility('realtimeChartVisible')}>
            {this.state.realtimeChartVisible ? 'Hide' : 'Show'} Source
          </button>
          {this.state.realtimeChartVisible && (
            <pre>
              <code>{`
import {
  EventOut,
  percentile,
  Pipeline as pipeline,
  Stream,
  TimeEvent,
  TimeRange,
  TimeSeries,
} from 'pondjs';
import React from 'react';
import {
  BarChart,
  ChartContainer,
  ChartRow,
  Charts,
  Legend,
  Resizable,
  ScatterChart,
  styler,
  YAxis,
} from 'react-timeseries-charts';
import Ring from 'ringjs';

const sec = 1000;
const minute = 60 * sec;
const hours = 60 * minute;
const rate = 80;

export default class Realtime extends React.Component {
  static displayName = 'AggregatorDemo';

  state = {
    time: new Date(2015, 0, 1),
    events: new Ring(200),
    percentile50Out: new Ring(100),
    percentile90Out: new Ring(100),
  };

  getNewEvent = t => {
    const base = Math.sin(t.getTime() / 10000000) * 350 + 500;
    return new TimeEvent(t, parseInt(base + Math.random() * 1000, 10));
  };

  componentDidMount() {
    //
    // Setup our aggregation pipelines
    //

    this.stream = new Stream();

    pipeline()
      .from(this.stream)
      .windowBy('5m')
      .emitOn('discard')
      .aggregate({
        value: { value: percentile(90) },
      })
      .to(EventOut, event => {
        const events = this.state.percentile90Out;
        events.push(event);
        this.setState({ percentile90Out: events });
      });

    pipeline()
      .from(this.stream)
      .windowBy('5m')
      .emitOn('discard')
      .aggregate({
        value: { value: percentile(50) },
      })
      .to(EventOut, event => {
        const events = this.state.percentile50Out;
        events.push(event);
        this.setState({ percentile50Out: events });
      });

    //
    // Setup our interval to advance the time and generate raw events
    //

    const increment = minute;
    this.interval = setInterval(() => {
      const t = new Date(this.state.time.getTime() + increment);
      const event = this.getNewEvent(t);

      // Raw events
      const newEvents = this.state.events;
      newEvents.push(event);
      this.setState({ time: t, events: newEvents });

      // Let our aggregators process the event
      this.stream.addEvent(event);
    }, rate);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const latestTime = \`\${this.state.time}\`;

    const fiveMinuteStyle = {
      value: {
        normal: { fill: '#619F3A', opacity: 0.2 },
        highlight: { fill: '619F3A', opacity: 0.5 },
        selected: { fill: '619F3A', opacity: 0.5 },
      },
    };

    const scatterStyle = {
      value: {
        normal: {
          fill: 'steelblue',
          opacity: 0.5,
        },
      },
    };

    //
    // Create a TimeSeries for our raw, 5min and hourly events
    //

    const eventSeries = new TimeSeries({
      name: 'raw',
      events: this.state.events.toArray(),
    });

    const perc50Series = new TimeSeries({
      name: 'five minute perc50',
      events: this.state.percentile50Out.toArray(),
    });

    const perc90Series = new TimeSeries({
      name: 'five minute perc90',
      events: this.state.percentile90Out.toArray(),
    });

    // Timerange for the chart axis
    const initialBeginTime = new Date(2015, 0, 1);
    const timeWindow = 3 * hours;

    let beginTime;
    const endTime = new Date(this.state.time.getTime() + minute);
    if (endTime.getTime() - timeWindow < initialBeginTime.getTime()) {
      beginTime = initialBeginTime;
    } else {
      beginTime = new Date(endTime.getTime() - timeWindow);
    }
    const timeRange = new TimeRange(beginTime, endTime);

    // Charts (after a certain amount of time, just show hourly rollup)
    const charts = (
      <Charts>
        <BarChart
          axis="y"
          series={perc90Series}
          style={fiveMinuteStyle}
          columns={['value']}
        />
        <BarChart
          axis="y"
          series={perc50Series}
          style={fiveMinuteStyle}
          columns={['value']}
        />
        <ScatterChart axis="y" series={eventSeries} style={scatterStyle} />
      </Charts>
    );

    const dateStyle = {
      fontSize: 12,
      color: '#AAA',
      borderWidth: 1,
      borderColor: '#F4F4F4',
    };

    const style = styler([
      { key: 'perc50', color: '#C5DCB7', width: 1, dashed: true },
      { key: 'perc90', color: '#DFECD7', width: 2 },
    ]);

    return (
      <div>
        <div className="row">
          <div className="col-md-4">
            <Legend
              type="swatch"
              style={style}
              categories={[
                {
                  key: 'perc50',
                  label: '50th Percentile',
                  style: { fill: '#C5DCB7' },
                },
                {
                  key: 'perc90',
                  label: '90th Percentile',
                  style: { fill: '#DFECD7' },
                },
              ]}
            />
          </div>
          <div className="col-md-8">
            <span style={dateStyle}>{latestTime}</span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <Resizable>
              <ChartContainer timeRange={timeRange}>
                <ChartRow height="150">
                  <YAxis
                    id="y"
                    label="Value"
                    min={0}
                    max={1500}
                    width="70"
                    type="linear"
                  />
                  {charts}
                </ChartRow>
              </ChartContainer>
            </Resizable>
          </div>
        </div>
      </div>
    );
  }
}

          `}</code>
            </pre>
          )}
        </div>
        <div>
          <h4>
            <a href="https://software.es.net/react-timeseries-charts/#/example/volume">
              Bar charts
            </a>
          </h4>
          <Bar />
        </div>
      </ChartsWrapper>
    );
  }
}
