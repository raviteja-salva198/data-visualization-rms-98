import React from 'react';
import {GlobalStyles, Heading} from './styles/GlobalStyles';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChart';
import LineChartComponent from './components/LineChart';
import FunnelChartComponent from './components/FunnelChart';

const App = () => (
  <>
    <GlobalStyles />
    <Heading>Data Visualization Dashboard</Heading>
    <BarChartComponent />
    <PieChartComponent />
    <LineChartComponent />
    <FunnelChartComponent />
  </>
);

export default App;
