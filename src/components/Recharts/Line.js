import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Brush,
  AreaChart,
  Area,
} from 'recharts';
import HighlightAndZoom from './HighlightAndZoom';

const data = [
  { name: 'bob', age: 100, speed: 50 },
  { name: 'bill', age: 200, speed: 30 },
  { name: 'jill', age: 150, speed: 40 },
  { name: 'job', age: 110, speed: 20 },
];
const data2 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default class RechartsLine extends Component {
  render() {
    return (
      <div>
        <h1>Recharts Line Charts</h1>
        <a href="http://recharts.org/en-US/examples/">
          More examples at Recharts.org
        </a>

        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="age" stroke="#8884d8" />
          <YAxis />
          <XAxis dataKey="name" />
        </LineChart>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="speed" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
        <LineChart
          width={600}
          height={300}
          data={data2}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <LineChart width={300} height={100} data={data2}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        <LineChart
          layout="vertical"
          width={600}
          height={300}
          data={data2}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="#8884d8" />
          <Line dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <LineChart
          width={600}
          height={300}
          data={data2}
          margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
          <ReferenceLine y={9800} label="Max" stroke="red" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <div>
          <h4>A demo of synchronized AreaCharts</h4>
          <LineChart
            width={600}
            height={200}
            data={data2}
            syncId="anyId"
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
          <p>Maybe some other content</p>
          <LineChart
            width={600}
            height={200}
            data={data2}
            syncId="anyId"
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Brush />
          </LineChart>
          <AreaChart
            width={600}
            height={200}
            data={data2}
            syncId="anyId"
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
        <HighlightAndZoom />
      </div>
    );
  }
}
