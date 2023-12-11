interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeName };
}

interface NativeName {
  official: string;
  common: string;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface CountryApiResponse {
  name: Name;
  status: string;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  capital: string[];
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  latlng: number[];
  area: number;
  flag: string;
  population: number;
  timezones: string[];
  continents: string[];
}

export interface Country {
  fullName: string;
  population: number;
  officialCurrency: Currency[];
}
