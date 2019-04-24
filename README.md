# React formatted currency

## What is this?

This is a React component which uses [format-currency-as-parts](https://github.com/josephchang/format-currency-to-parts), which allows parts of the formatted currency to be styled differently, e.g. smaller decimals, different coloured currency code.

## Installation

### Yarn

```sh
$ yarn add react-formatted-currency
```

### NPM

```sh
$ npm install react-formatted-currency
```

## Usage

```js
import FormattedCurrency from 'react-formatted-currency';

const CurrencyComponent = () => (
  <FormattedCurrency
    amount={123456.789}
    currency="USD"
    locale="en-us"
    parts={['code', 'number']}
    render={({ code, number }) => (
      <div>
        <span>{code}</span>
        <strong>{number}</strong>
      </div>
    )}
  />
);
```

- **amount** (_required_, number): The number to format
- **currency** (_required_, string): 3-letter ISO 4217 currency code (https://en.wikipedia.org/wiki/ISO_4217)
- **parts** (_required_, string[]): An array of parts you want to display:
  - number: the whole number
  - integer: the integer portion of the number
  - decimals: the fraction portion of the number (including the decimal point), will return empty string if number of decimals for the currency is 0 (e.g. JPY).
  - code: the currency code
  - symbol: the currency symbol (Latin form when approriate)
- **locale** (_required_, string): The locale to format the number with
- **render** (_required_, function): Render the formatted currency; an object with the properties - `code`, `symbol`, `number`, `integer`, and/or `decimals` is provided to the `render` prop depending on what is passed through the `parts` prop.

See examples in the `examples` folder.
