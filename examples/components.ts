import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 20px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin-bottom: 32px;
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin: 0 0 24px;
`;

export const Examples = styled.div`
  display: grid;
  grid-template-columns: 360px 360px;
  grid-gap: 20px;
`;

export const Example = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 2px 2px 5px -2px #bbb;
  padding: 16px;
`;

export const E1_Wrapper = styled.div`
  display: flex;
`;

export const E1_CurrencySymbol = styled.div`
  color: green;
  font-size: 24px;
  margin-right: 8px;
  margin-top: 2px;
`;

export const E1_Integer = styled.div`
  color: #333;
  font-size: 36px;
  font-weight: bold;
  margin-right: 4px;
`;

export const E1_Decimals = styled.div`
  color: #666;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
`;

export const E2_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const E2_CurrencyCode = styled.div`
  font-size: 24px;
  margin-top: 4px;
`;

export const E2_Number = styled.div`
  font-size: 48px;
  font-weight: bold;
`;
