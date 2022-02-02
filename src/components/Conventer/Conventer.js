import React, { useEffect, useState } from "react";
import fetch from "cross-fetch";
import {
  ConventerWrapper,
  FormWrapper,
  AmountInput,
  CurrencySelect,
  SubmitButton,
  ResultWrapper,
  Result,
  MessageWrapper,
  FormMessageWrapper,
} from "./ConventerWrapper";

const Conventer = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currentCurrency, setCurrentCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [options, setOptions] = useState([]);
  const url = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
  const decimal = /^[+-]?\d+(\.\d+)?$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount.match(decimal)) {
      const value = parseFloat(amount) * currencies[currentCurrency];
      setResult(value);
    } else {
      setMessage("Invalid value");
      setTimeout(() => setMessage(""), 1500);
    }
  };

  useEffect((e) => {
    const req = new XMLHttpRequest();
    const parser = new DOMParser();
    req.open("GET", url, false);
    req.send(null);
    if (req.status === 200) {
      const xml = parser.parseFromString(req.responseText, "text/html");
      const currencies = xml.getElementsByTagName("Cube");
      const xmlArray = Array.from(currencies);
      const currenciesObject = {};
      xmlArray.forEach((item) => {
        currenciesObject[item.getAttribute("currency")] = parseFloat(
          item.getAttribute("rate")
        );
      });
      const optionsArray = Object.keys(currenciesObject);
      setOptions(optionsArray);
      setCurrencies(currenciesObject);
    }
  }, []);

  return (
    <ConventerWrapper>
      <h1>Currency Exchange Rate</h1>
      <FormMessageWrapper>
        <FormWrapper onSubmit={(e) => handleSubmit(e)} id="form">
          <AmountInput
            onChange={(e) => {
              setResult("");
              setAmount(e.target.value);
            }}
            placeholder="Enter amount "
          />
          <CurrencySelect
            onChange={(e) => {
              setResult("");
              setCurrentCurrency(e.target.value);
            }}
          >
            {options.map((item, index) => {
              if (item !== "null") {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              }
            })}
          </CurrencySelect>
        </FormWrapper>
        <MessageWrapper>{message && message}</MessageWrapper>
      </FormMessageWrapper>

      <ResultWrapper>
        <Result>
          {result && `${amount} EUR =`}
          <p>{result && `${result.toFixed(2)} ${currentCurrency}`}</p>
        </Result>
        <SubmitButton type="sumbit" form="form">
          Convert
        </SubmitButton>
      </ResultWrapper>
    </ConventerWrapper>
  );
};
export default Conventer;
