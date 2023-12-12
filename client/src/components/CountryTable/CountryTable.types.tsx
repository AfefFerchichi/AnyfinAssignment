import { ICountry, ICurrencyRate } from "../../api/api.types";

export interface CountryTableProps {
    countries: ICountry[];
    currencyExchangeRates: ICurrencyRate;
}