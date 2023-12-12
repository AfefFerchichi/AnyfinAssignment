import axios from "axios";
import { ICountry, ICurrencyRate, ILoginResponse } from "./api.types";

const baseUrl: string = "http://localhost:4000";

const APIInstance = axios.create({
  baseURL: baseUrl,
});

APIInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const getCountries = async (name?: string): Promise<ICountry[]> => {
  try {
    const { data: countries } = await APIInstance.get<ICountry[]>(
      baseUrl + "/country" + (name ? `?name=${name}` : "")
    );
    return countries;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllCurrenciesExcahngeRate =
  async (): Promise<ICurrencyRate> => {
    try {
      const { data: currencyRates } = await APIInstance.get<ICurrencyRate>(
        baseUrl + "/country/currencies"
      );
      return currencyRates;
    } catch (error: any) {
      throw new Error(error);
    }
  };

export const userLogin = async (
  email: string,
  password: string
): Promise<ILoginResponse> => {
  try {
    const { data: user } = await APIInstance.post<ILoginResponse>(
      "/user/login",
      {
        email,
        password,
      }
    );
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};
