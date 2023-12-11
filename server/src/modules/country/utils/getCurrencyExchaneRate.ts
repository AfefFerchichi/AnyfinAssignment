import { config } from 'dotenv';
import Axios from 'axios';
import { CurrencyRateResponse } from '../country.dto';
config();
const FIXER_API_KEY = process.env.FIXER_API_KEY;

export async function getCurrencyRates(): Promise<CurrencyRateResponse> {
  const { data } = await Axios.get<CurrencyRateResponse>(
    `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`,
  );
  return data;
}
