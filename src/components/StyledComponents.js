import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  text-align: center;
  color: #333;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  text-align: center;
  color: #333;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 15px;
  }
`;


export const ChartContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px auto;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
  }
`;


export const ResponsiveContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;

  @media (max-width: 768px) {
    height: 250px;
    min-height: unset;
  }
`;

export const ChartWrapper = styled.div`
  margin: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

