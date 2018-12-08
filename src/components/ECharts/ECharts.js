import React, { Component } from 'react';
import styled from 'styled-components';
import Bar from './Bar';
import Butterfly from './Butterfly';
import ButterflyStack from './ButterflyStack';
import HelloECharts from './HelloECharts';
import HorizontalBarStack from './HorizontalBarStack';
import VerticalBarStack from './VerticalBarStack';
const ChartsWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-bottom: 125px;
`;

export default class ECharts extends Component {
  render() {
    return (
      <ChartsWrapper>
        <h1>
          <a href="https://ecomfe.github.io/echarts-doc/public/en/index.html">
            ECharts
          </a>
        </h1>
        <p>
          Pass in a large "options" config object to a
          <pre style={{ display: 'inline', margin: '0 6px' }}>
            <code>{`<ReactEcharts option={this.getOption()} />`}</code>
          </pre>
          component
        </p>
        <h2>
          <a href="http://git.hust.cc/echarts-for-react/#/?_k=9v3yjb">
            echarts-for-react
          </a>
          <span style={{ marginLeft: 15 }} />
          <a href="https://www.npmjs.com/package/echarts-for-react">npm</a>
        </h2>

        <HelloECharts />

        <Bar />

        <HorizontalBarStack />

        <Butterfly />

        <ButterflyStack />

        <VerticalBarStack />
      </ChartsWrapper>
    );
  }
}
