import { Injectable } from '@nestjs/common';
import { Country, CountryApiResponse } from './country.dto';
import { normalizeCountriesResponse } from './utils/normalizeCountryREsponse';
import Axios from 'axios';
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
}
