import { useState, useEffect, useCallback, useMemo } from "react";
import { ICountry, ICurrencyRate } from "../../api/api.types";
import {
  getAllCurrenciesExcahngeRate,
  getCountries,
} from "../../api/api.service";
import { CountryTable } from "../../components/CountryTable/CountryTable";
import { AutoComplete, Input, Space } from "antd";
import { SelectProps } from "antd/lib/select";
import debounce from "lodash.debounce";
import "./Country.css";
export const CountryContainer = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<ICountry[]>([]);
  const [currencyExchangeRates, setCurrencyExchangeRates] =
    useState<ICurrencyRate>({});

  const fetchCountries = useCallback(async (name: string) => {
    try {
      const countries = await getCountries(name);
      setCountries(countries);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const debounceLoadData = useCallback(debounce(fetchCountries, 500), [
    fetchCountries,
  ]);

  const filterCountries = useCallback(
    (countries: ICountry[], searchText: string) => {
      const filteredCountries = countries.filter((country) =>
        country.fullName.toLowerCase().includes(searchText.toLowerCase())
      );
      const finalCountries = [...filteredCountries, ...selectedCountries];

      setSelectedCountries(finalCountries);
    },
    [selectedCountries]
  );

  useEffect(() => {
    debounceLoadData(searchText);
  }, [debounceLoadData, searchText]);

  useEffect(() => {
    const fetchCurrencyExchangeRates = async () => {
      try {
        const currencyExchangeRates = await getAllCurrenciesExcahngeRate();
        setCurrencyExchangeRates(currencyExchangeRates);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCurrencyExchangeRates();
  }, []);

  const autoCompleteOptions: SelectProps["options"] = useMemo(
    () =>
      countries.map((country) => ({
        label: country.fullName,
        value: country.fullName,
        disabled: selectedCountries.some(
          (selectedCountry) => selectedCountry.fullName === country.fullName
        ),
      })),
    [countries, selectedCountries]
  );

  return (
    <div>
      <Space direction="vertical" size={10} className="container-country">
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={500}
          style={{ width: 250 }}
          allowClear={true}
          value={null || searchText}
          onSelect={(value) => filterCountries(countries, value)}
          options={autoCompleteOptions}
          size="middle"
          onChange={(value) => setSearchText(value)}
          onClick={() => {
            setSearchText("");
          }}
        >
          <Input.Search size="middle" placeholder="Search your country" />
        </AutoComplete>
        <CountryTable
          countries={selectedCountries}
          currencyExchangeRates={currencyExchangeRates}
        />
      </Space>
    </div>
  );
};