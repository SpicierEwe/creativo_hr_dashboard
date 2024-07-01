import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: -4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: -3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: -2000,
    pv: -9800,
  },
  {
    name: "Page D",
    uv: -2780,
    pv: 3008,
  },
  {
    name: "Page C",
    uv: -2000,
    pv: 5000,
  },
  {
    name: "Page F",
    uv: -2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: -3490,
    pv: 4300,
  },
];

export default function DoubleBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      stackOffset="sign"
      barSize={10}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      {/* <ReferenceLine y={0} stroke="#000" /> */}
      <Bar dataKey="pv" fill="#0bb885" stackId="stack" />
      <Bar dataKey="uv" fill="#ff9f43" stackId="stack" />
    </BarChart>
  );
}
