import { FC } from 'react';
import { formatCurrencyToParts, CurrencyParts } from 'format-currency-to-parts';

export type RenderArgs = { [part in CurrencyParts]?: string };

export interface IFormattedCurrencyProps {
  amount: number;
  currency: string;
  locale: string;
  parts: CurrencyParts[];
  render(args: RenderArgs): JSX.Element;
}

const objectify = (parts: CurrencyParts[], values: string[]): RenderArgs =>
  parts.reduce(
    (o, part, idx) => ({
      ...o,
      [part]: values[idx],
    }),
    {}
  );

const FormattedCurrency: FC<IFormattedCurrencyProps> = ({
  amount,
  currency,
  locale,
  parts,
  render,
}) => {
  const formatted = formatCurrencyToParts({ currency, parts })(locale, amount);
  const objectified = objectify(parts, formatted);
  return render(objectified);
};

export default FormattedCurrency;
export * from 'format-currency-to-parts';
