import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', cpu: 4000, memory: 2400, amt: 2400 },
  { name: 'Page B', cpu: 3000, memory: 1398, amt: 2210 },
  { name: 'Page C', cpu: 2000, memory: 9800, amt: 2290 },
  { name: 'Page D', cpu: 2780, memory: 3908, amt: 2000 },
  { name: 'Page E', cpu: 1890, memory: 4800, amt: 2181 },
  { name: 'Page F', cpu: 2390, memory: 3800, amt: 2500 },
  { name: 'Page G', cpu: 3490, memory: 4300, amt: 2100 },
];

const HealthMonitoring = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
        <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HealthMonitoring;
