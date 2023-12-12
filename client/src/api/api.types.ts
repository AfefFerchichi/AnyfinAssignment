export interface ICountry {
  fullName: string;
  population: number;
  officialCurrency: { [key: string]: Currency };
}
export interface Currency {
  name: string;
  symbol: string;
}

export interface ICurrencyRate {
  [key: string]: number;
}


export interface ILoginResponse {
  id: number;
  email: string;
  token: string;
}
