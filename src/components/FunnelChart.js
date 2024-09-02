import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Heading } from './StyledComponents';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Applications Received', 'Candidates Shortlisted', 'Interviews Scheduled', 'Offers Made', 'Offers Accepted'],
  datasets: [{
    label: 'Stage Value',
    data: [4000, 3000, 2000, 1500, 1200],
    backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
    borderWidth: 1,
  }],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.label + ': ' + context.raw;
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};


const ChartWrapper = styled.div`
  margin: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const FunnelChartComponent = () => (
  <ChartWrapper>
    <Heading>Funnel Chart</Heading>
    <Bar data={data} options={options} />
  </ChartWrapper>
);

export default FunnelChartComponent;
