import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CurrencyParts } from 'format-currency-to-parts';
import FormattedCurrency, { IFormattedCurrencyProps, RenderArgs } from '../';

describe('<FormattedCurrency />', () => {
  let props: IFormattedCurrencyProps;
  let wrapper: ShallowWrapper<IFormattedCurrencyProps>;

  describe('GIVEN GBP 43210.96', () => {
    beforeEach(() => {
      props = {
        currency: 'GBP',
        amount: 43210.96,
        locale: 'en-gb',
        parts: [CurrencyParts.INTEGER, CurrencyParts.DECIMALS],
        render: (parts: RenderArgs) => (
          <div>
            <span>{parts.integer}</span>
            <sup>{parts.decimals}</sup>
          </div>
        ),
      };

      wrapper = shallow(<FormattedCurrency {...props} />);
    });

    it('should render the formatted currency', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
