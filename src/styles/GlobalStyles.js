import styled , { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 15px;
  font-size: 40px;
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
