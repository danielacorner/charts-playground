import React, { Component } from 'react';
import styled from 'styled-components';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryStack,
  VictoryTheme,
} from 'victory';

export const ChartsWrapper = styled.div`
  pre {
    background: lightgrey;
  }
`;

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];
const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
];

export default class Bar extends Component {
  render() {
    return (
      <ChartsWrapper>
        <h4>
          <a href="https://formidable.com/open-source/victory/docs/victory-bar/">
            Victory Bar Charts
          </a>
        </h4>
        <VictoryChart
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={x => `$${x / 1000}k`}
          />
          <VictoryBar
            data={data}
            // data accessor for x values
            x="quarter"
            // data accessor for y values
            y="earnings"
          />
        </VictoryChart>
        <pre>
          {`
          <VictoryChart
            // domainPadding will add space to each side of VictoryBar to
            // prevent it from overlapping the axis
            domainPadding={20}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4]}
              tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
            />
            <VictoryAxis
              dependentAxis
              // tickFormat specifies how ticks should be displayed
              tickFormat={x => \`$\${x / 1000}k\`}
            />
            <VictoryBar
              data={data}
              // data accessor for x values
              x="quarter"
              // data accessor for y values
              y="earnings"
            />
          </VictoryChart>
        `}
        </pre>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          />
          <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
          <VictoryStack>
            <VictoryBar data={data2012} x="quarter" y="earnings" />
            <VictoryBar data={data2013} x="quarter" y="earnings" />
            <VictoryBar data={data2014} x="quarter" y="earnings" />
            <VictoryBar data={data2015} x="quarter" y="earnings" />
          </VictoryStack>
        </VictoryChart>
        <pre>
          {`
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
            />
            <VictoryAxis dependentAxis tickFormat={x => \`$\${x / 1000}k\`} />
            <VictoryStack>
              <VictoryBar data={data2012} x="quarter" y="earnings" />
              <VictoryBar data={data2013} x="quarter" y="earnings" />
              <VictoryBar data={data2014} x="quarter" y="earnings" />
              <VictoryBar data={data2015} x="quarter" y="earnings" />
            </VictoryStack>
          </VictoryChart>
          `}
        </pre>
        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
          />
          <VictoryAxis dependentAxis tickFormat={x => `$${x / 1000}k`} />
          <VictoryStack colorScale={'warm'}>
            <VictoryBar data={data2012} x="quarter" y="earnings" />
            <VictoryBar data={data2013} x="quarter" y="earnings" />
            <VictoryBar data={data2014} x="quarter" y="earnings" />
            <VictoryBar data={data2015} x="quarter" y="earnings" />
          </VictoryStack>
        </VictoryChart>
        <pre>
          {`
          <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
            />
            <VictoryAxis dependentAxis tickFormat={x => \`$\${x / 1000}k\`} />
            <VictoryStack colorScale={'warm'}>
              <VictoryBar data={data2012} x="quarter" y="earnings" />
              <VictoryBar data={data2013} x="quarter" y="earnings" />
              <VictoryBar data={data2014} x="quarter" y="earnings" />
              <VictoryBar data={data2015} x="quarter" y="earnings" />
            </VictoryStack>
          </VictoryChart>
       `}
        </pre>
        <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
          <VictoryBar
            style={{ data: { fill: '#c43a31' } }}
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
        <pre>
          {`
          <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
            <VictoryBar
              style={{ data: { fill: '#c43a31' } }}
              data={data}
              x="quarter"
              y="earnings"
              />
              </VictoryChart>

              `}
        </pre>
        <div>
          <h3>Click Me</h3>
          <VictoryBar
            style={{
              data: { fill: '#c43a31' },
            }}
            x="quarter"
            y="earnings"
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onClick: () => {
                    return [
                      {
                        target: 'data',
                        mutation: props => {
                          const fill = props.style && props.style.fill;
                          return fill === 'black'
                            ? null
                            : { style: { fill: 'black' } };
                        },
                      },
                    ];
                  },
                },
              },
            ]}
            data={data}
          />
        </div>
        <pre>
          {`
          <div>
          <h3>Click Me</h3>
          <VictoryBar
          style={{
            data: { fill: '#c43a31' },
          }}
          x="quarter"
          y="earnings"
          events={[
            {
              target: 'data',
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: 'data',
                      mutation: props => {
                        const fill = props.style && props.style.fill;
                        return fill === 'black'
                        ? null
                        : { style: { fill: 'black' } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={data}
          />
          </div>
          `}
        </pre>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ y: 10 }}>
          <VictoryBar
            horizontal
            x="quarter"
            y="earnings"
            style={{
              data: { fill: '#c43a31' },
            }}
            data={data}
          />
        </VictoryChart>
        <pre>
          {`
          <VictoryChart theme={VictoryTheme.material} domainPadding={{ y: 10 }}>
            <VictoryBar
              horizontal
              x="quarter"
              y="earnings"
              style={{
                data: { fill: '#c43a31' },
              }}
              data={data}
              />
              </VictoryChart>
              `}
        </pre>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          labels={d => d.earnings}
          style={{ labels: { fill: 'white' } }}
          labelComponent={<VictoryLabel dy={30} />}
        />
        <pre>
          {`
          <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          labels={(d) => d.earnings}
          style={{ labels: { fill: "white" } }}
          labelComponent={<VictoryLabel dy={30} />}
          />
          `}
        </pre>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          labels={d => `y: ${d.earnings}`}
        />
        <pre>
          {`
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            labels={d => \`y: \${d.earnings}\`}
            />
            `}
        </pre>
        <VictoryBar
          style={{
            data: {
              fill: d => (d.quarter === 3 ? '#000000' : '#c43a31'),
              stroke: d => (d.quarter === 3 ? '#000000' : '#c43a31'),
              fillOpacity: 0.7,
              strokeWidth: 3,
            },
            labels: {
              fontSize: 15,
              fill: d => (d.quarter === 3 ? '#000000' : '#c43a31'),
            },
          }}
          x="quarter"
          y="earnings"
          data={data}
          labels={d => d.quarter}
        />
        <pre>
          {`
          <VictoryBar
            style={{
              data: {
                fill: d => (d.quarter === 3 ? '#000000' : '#c43a31'),
                stroke: d => (d.quarter === 3 ? '#000000' : '#c43a31'),
                fillOpacity: 0.7,
                strokeWidth: 3,
              },
              labels: {
                fontSize: 15,
                fill: d => (d.quarter === 3 ? '#000000' : '#c43a31'),
              },
            }}
            x="quarter"
            y="earnings"
            data={data}
            labels={d => d.quarter}
          />
`}
        </pre>
      </ChartsWrapper>
    );
  }
}
