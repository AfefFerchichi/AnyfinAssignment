import { Country, CountryApiResponse } from '../country.dto';

export function normalizeCountriesResponse(countries: CountryApiResponse[]) {
  const normalizedCountries: Country[] = countries.map((country) => {
    return {
      fullName: country.name.common,
      population: country.population,
      officialCurrency: country.currencies,
    };
  });

  return normalizedCountries;
}
