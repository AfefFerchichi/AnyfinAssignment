import { Country, CountryApiResponse } from '../country.dto';

export function normalizeCountriesResponse(countries: CountryApiResponse[]) {
  const normalizedCountries: Country[] = countries.map((country) => {
    return {
      fullName: country.name.common,
      population: country.population,
      officialCurrency: Object.values(country.currencies || {}),
    };
  });

  return normalizedCountries;
}
