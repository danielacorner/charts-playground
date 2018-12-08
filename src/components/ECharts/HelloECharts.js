import ReactEcharts from 'echarts-for-react';
import React, { Component } from 'react';

export default class HelloECharts extends Component {
  state = {
    hello: false,
  };
  toggleVisibility = panel => {
    this.setState({ [panel]: !this.state[panel] });
  };
  getOption = () => {
    return {
      title: {
        text: 'ECharts entry example',
      },
      tooltip: {},
      legend: {
        data: ['Sales'],
      },
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
  };
  render() {
    return (
      <div>
        <ReactEcharts option={this.getOption()} />
        <button onClick={() => this.toggleVisibility('hello')}>
          {this.state.hello ? 'Hide' : 'Show'} Source
        </button>
        {this.state.hello && (
          <pre>
            <code>
              {`getOption = () => {
          return {
            title: {
              text: 'ECharts entry example',
            },
            tooltip: {},
            legend: {
              data: ['Sales'],
            },
            xAxis: {
              data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
            },
            yAxis: {},
            series: [
              {
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
              },
            ],
          };
        };
        render() {
          return (
              <ReactEcharts option={this.getOption()} />
          `}
            </code>
          </pre>
        )}
      </div>
    );
  }
}
