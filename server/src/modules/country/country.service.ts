import { Injectable } from '@nestjs/common';
import {
  Country,
  CountryApiResponse,
  CurrencyRateResponse,
  SEKCurrencyRate,
} from './country.dto';
import { normalizeCountriesResponse } from './utils/normalizeCountryREsponse';
import Axios from 'axios';
import { config } from 'dotenv';
import { changeBaseCurrencytoSEK } from './utils/changeBaseCurrencytoSEK';

config();
const FIXER_API_KEY = process.env.FIXER_API_KEY;

@Injectable()
export class CountryService {
  async getAllCountries(): Promise<Country[]> {
    const { data } = await Axios.get<CountryApiResponse[]>(
      'https://restcountries.com/v3.1/all',
    );
    const normalizedCountries: Country[] = normalizeCountriesResponse(data);
    return normalizedCountries;
  }

  async getCountriesByName(name: string): Promise<Country[]> {
    const { data } = await Axios.get<CountryApiResponse[]>(
      `https://restcountries.com/v3.1/name/${name}`,
    );
    const normalizedCountries: Country[] = normalizeCountriesResponse(data);
    return normalizedCountries;
  }

  async getAllCurrenciesExcahngeRate(): Promise<SEKCurrencyRate> {
    const { data } = await Axios.get<CurrencyRateResponse>(
      `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`,
    );
    const newRatesInSEK = changeBaseCurrencytoSEK(data);
    return newRatesInSEK;
  }
}
