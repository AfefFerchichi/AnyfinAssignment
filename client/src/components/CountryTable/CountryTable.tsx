import { useState } from "react";
import { ICountry } from "../../api/api.types";
import { CountryTableProps } from "./CountryTable.types";
import { Input, Table, TableColumnType } from "antd";
export const CountryTable = (props: CountryTableProps) => {
  const { countries, currencyExchangeRates } = props;

  const [totalAmountMap, setTotalAmountMap] = useState<Record<string, number>>(
    {}
  );

  const columns: TableColumnType<ICountry>[] = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      width: "20%",
      render: (text: string) => <a href="/">{text}</a>,
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      width: "10%",
    },
    {
      title: "Official Currency",
      dataIndex: "officialCurrency",
      key: "officialCurrency",
      width: "10%",
      render: (_: string, country) => (
        <>
          {Object.values(country.officialCurrency).map((currency, index) => (
            <div key={index}>
              {currency.name}-{currency.symbol}
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Currency Exchange Rate",
      dataIndex: "officialCurrency",
      key: "officialCurrency",
        width: "10%",
      render: (_: string, country) => (
        <>
          {Object.keys(country.officialCurrency).map((currencyCode, index) => (
            <div key={index}>
              {Number(currencyExchangeRates[currencyCode]).toFixed(3)} SEK
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Amount in SEK",
      dataIndex: "amount",
      key: "amount",
      width: "10%",
      render: (_: string, country) => (
        <>
          {Object.keys(country.officialCurrency).map((key, index) => (
            <div key={index}>
              <Input
                type="number"
                name="amount"
                onChange={(e) => {
                  const amount = e.target.value;
                  const totalAmount =
                    Number(amount) * Number(currencyExchangeRates[key]);
                  setTotalAmountMap({ ...totalAmountMap, [key]: totalAmount });
                }}
              />
            </div>
          ))}
        </>
      ),
    },
    {
      title: "Amount in Local Currency",
      dataIndex: "amount",
      key: "amount",
      width: "20%",
      render: (_: string, country) => (
        <>
          {Object.keys(country.officialCurrency).map((key, index) => (
            <div key={index}>
              {totalAmountMap[key]
                ? `${Number(totalAmountMap[key]).toFixed(3)} ${key}`
                : ""}
            </div>
          ))}
        </>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey={(i) => i.fullName}
      dataSource={countries}
      pagination={{ pageSize: 10 }}
    />
  );
};
