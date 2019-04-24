import React, { Component } from 'react';
import FormattedCurrency, { CurrencyParts, RenderArgs } from '../src';
import {
  GlobalStyle,
  H1,
  H2,
  Examples,
  Example,
  E1_Wrapper,
  E1_CurrencySymbol,
  E1_Integer,
  E1_Decimals,
  E2_Wrapper,
  E2_CurrencyCode,
  E2_Number,
} from './components';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <H1>Formatted currency examples</H1>
        <Examples>
          <FormattedCurrency
            amount={Math.random() * 100000}
            currency="USD"
            locale="en-us"
            parts={[
              CurrencyParts.SYMBOL,
              CurrencyParts.INTEGER,
              CurrencyParts.DECIMALS,
            ]}
            render={this.renderExample1}
          />
          <FormattedCurrency
            amount={Math.random() * 100000}
            currency="GBP"
            locale="de-de"
            parts={[CurrencyParts.CODE, CurrencyParts.NUMBER]}
            render={this.renderExample2}
          />
        </Examples>
      </>
    );
  }

  renderExample1 = ({ symbol, integer, decimals }: RenderArgs) => {
    return (
      <Example>
        <H2>Example 1</H2>
        <E1_Wrapper>
          <E1_CurrencySymbol>{symbol}</E1_CurrencySymbol>
          <E1_Integer>{integer}</E1_Integer>
          <E1_Decimals>{decimals}</E1_Decimals>
        </E1_Wrapper>
      </Example>
    );
  };

  renderExample2 = ({ code, number }: RenderArgs) => {
    return (
      <Example>
        <H2>Example 2</H2>
        <E2_Wrapper>
          <E2_CurrencyCode>{code}</E2_CurrencyCode>
          <E2_Number>{number}</E2_Number>
        </E2_Wrapper>
      </Example>
    );
  };
}

export default App;
