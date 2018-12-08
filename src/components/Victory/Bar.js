import React, { Component } from 'react';
import styled from 'styled-components';
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryStack,
  VictoryTheme,
} from 'victory';

export const ChartsWrapper = styled.div``;

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

const sampleData = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
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
          <code>
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
          </code>
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
          <code>
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
          </code>
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
          <code>
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
          </code>
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
          <code>
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
          </code>
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
          <code>
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
          </code>
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
          <code>
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
          </code>
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
          <code>
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
          </code>
        </pre>
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          labels={d => `y: ${d.earnings}`}
        />
        <pre>
          <code>
            {`
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
            labels={d => \`y: \${d.earnings}\`}
            />
            `}
          </code>
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
          <code>
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
          </code>
        </pre>
        <h2>standalone</h2>
        <p>type: boolean</p>
        <p>VictoryBar uses the standard standalone prop.</p>
        <p>
          Read about it{' '}
          <a href="https://formidable.com/open-source/victory/docs/common-props/#standalone">
            here
          </a>
        </p>
        <p>
          note: When VictoryBar is nested within a component like VictoryChart,
          this prop will be set to false{' '}
        </p>
        <p>default: standalone={'{true}'}</p>
        <svg width={300} height={300}>
          <circle cx={150} cy={150} r={150} fill="#c43a31" />
          <VictoryBar
            x="quarter"
            y="earnings"
            standalone={false}
            width={300}
            height={300}
            padding={{ left: 10, right: 10 }}
            data={data}
          />
        </svg>
        <pre>
          <code>
            {`
          <svg width={300} height={300}>
            <circle cx={150} cy={150} r={150} fill="#c43a31" />
            <VictoryBar
            x="quarter"
              y="earnings"
              standalone={false}
              width={300}
              height={300}
              padding={{ left: 10, right: 10 }}
              data={data}
              />
              </svg>
          `}
          </code>
        </pre>
        <svg width={300} height={300}>
          <circle cx={150} cy={150} r={150} fill="#c43a31" />
          <VictoryArea
            x="quarter"
            y="earnings"
            standalone={false}
            width={300}
            height={300}
            padding={0}
            data={data}
          />
        </svg>
        <h2>y0</h2>
        <p>type: string || integer || array[string] || function</p>
        <p>
          VictoryBar uses the standard y0 data accessor prop to set a baseline.
        </p>
        <p>
          Read about it{' '}
          <a href="https://formidable.com/open-source/victory/docs/common-props#y0">
            here
          </a>
        </p>
        <VictoryChart domainPadding={30}>
          <VictoryBar
            // x="quarter"
            // y="earnings"
            data={sampleData}
            y0={d => d.y - 1}
          />
        </VictoryChart>
      </ChartsWrapper>
    );
  }
}
