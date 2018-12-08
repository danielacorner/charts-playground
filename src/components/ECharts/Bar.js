import ReactEcharts from 'echarts-for-react';
import React, { Component } from 'react';

export default class Bar extends Component {
  state = {
    visible: false,
  };
  toggleVisibility = panel => {
    this.setState({ [panel]: !this.state[panel] });
  };
  getOption = () => {
    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    return {
      title: {
        text: '柱状图动画延迟',
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function(idx) {
            return idx * 10;
          },
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function(idx) {
            return idx * 10 + 100;
          },
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function(idx) {
        return idx * 5;
      },
    };
  };
  render() {
    return (
      <div>
        <ReactEcharts option={this.getOption()} />
        <button onClick={() => this.toggleVisibility('visible')}>
          {this.state.hello ? 'Hide' : 'Show'} Source
        </button>

        {this.state.visible && (
          <pre>
            <code>{` getOption = () => {
    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    for (let i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    return {
      title: {
        text: '柱状图动画延迟',
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2,
          },
        },
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: function(idx) {
            return idx * 10;
          },
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: function(idx) {
            return idx * 10 + 100;
          },
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function(idx) {
        return idx * 5;
      },
    };
  };
  render() {
    return <ReactEcharts option={this.getOption()} />;
  }`}</code>
          </pre>
        )}
      </div>
    );
  }
}
