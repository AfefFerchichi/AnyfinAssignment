import { config } from 'dotenv';
import { SEKCurrencyRate, CurrencyRateResponse } from '../country.dto';
config();

export function changeBaseCurrencytoSEK(
  currencyResponse: CurrencyRateResponse,
): SEKCurrencyRate {
  const newBaseCurrency = 'SEK';
  const SEKRate = currencyResponse.rates[newBaseCurrency];
  const baseCurrencyPerSEK = 1 / SEKRate;
  const allCurrencyKeys = Object.keys(currencyResponse.rates);
  const newRates: SEKCurrencyRate = {};
  allCurrencyKeys.forEach((currencyKey) => {
    newRates[currencyKey] =
      baseCurrencyPerSEK * currencyResponse.rates[currencyKey];
  });
  return newRates;
}
