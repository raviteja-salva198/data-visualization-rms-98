import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Title, ChartWrapper } from './StyledComponents';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#FB0101', '#03DD5E', '#FF8042'];


const PieChartComponent = () => (
  <ChartWrapper>
    <Title>Pie Chart</Title>
    <PieChart width={400} height={400}>
      <Pie data={data} cx={200} cy={200} outerRadius={150} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ChartWrapper>
);

export default PieChartComponent;
