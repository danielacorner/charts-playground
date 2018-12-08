import ReactEcharts from 'echarts-for-react';
import React, { Component } from 'react';

export default class ButterflyStack extends Component {
  state = {
    visible: false,
  };
  toggleVisibility = panel => {
    this.setState({ [panel]: !this.state[panel] });
  };
  getOption = () => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
        },
      },
      legend: {
        data: ['one', 'two', 'three'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        },
      ],
      series: [
        {
          name: 'one',
          type: 'bar',
          stack: 'stackOne',
          label: {
            normal: {
              show: true,
              position: 'inside',
            },
          },
          data: [200, 170, 240, 244, 200, 220, 210],
        },
        {
          name: 'three',
          type: 'bar',
          stack: 'stackOne',
          label: {
            normal: {
              show: true,
            },
          },
          data: [320, 302, 341, 374, 390, 450, 420],
        },
        {
          name: 'two',
          type: 'bar',
          stack: 'stackOne',
          label: {
            normal: {
              show: true,
              position: 'left',
            },
          },
          data: [-120, -132, -101, -134, -190, -230, -210],
        },
      ],
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
            <code>{`
  getOption = () => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      toolbox: {
        feature: {
          magicType: {
            type: ['stack', 'tiled'],
          },
          dataView: {},
        },
      },
      legend: {
        data: ['one', 'two', 'three'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'value',
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        },
      ],
      series: [
        {
          name: 'one',
          type: 'bar',
          stack: 'stackOne',
          label: {
            normal: {
              show: true,
              position: 'inside',
            },
          },
          data: [200, 170, 240, 244, 200, 220, 210],
        },
        {
          name: 'three',
          type: 'bar',
          stack: 'stackOne',
          label: {
            normal: {
              show: true,
            },
          },
          data: [320, 302, 341, 374, 390, 450, 420],
        },
        {
          name: 'two',
          type: 'bar',
          stack: 'stackOne',
          label: {
            normal: {
              show: true,
              position: 'left',
            },
          },
          data: [-120, -132, -101, -134, -190, -230, -210],
        },
      ],
    };
  };

  render() {
    return (
      <div>
        <ReactEcharts option={this.getOption()} />`}</code>
          </pre>
        )}
      </div>
    );
  }
}
