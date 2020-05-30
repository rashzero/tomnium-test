import React from "react";
import "./styles.css";
import { data } from "./data.js";

export default class CurrencyList extends React.Component {
  state = {
    currencyList: []
  };

  componentDidMount() {
    this.getData().then(currency =>
      this.setState({ currencyList: [currency] })
    );
  }

  getData() {
    return Promise.resolve(data);
  }

  render() {
    return (
      <div>
        {this.state.currencyList.map((currency, index) => {
          return (
            <div key={currency.timestamp} className="flex-container">
              <div className="info-container">
                <span> valid: </span>{" "}
                <span>{currency.valid ? "\u2713" : "\u2717"} </span>
              </div>
              <div className="info-container">
                <span> base: </span> <span> {currency.base} </span>
              </div>
              <div className="info-container">
                <span> date: </span>
                <span>
                  {" "}
                  {new Date(currency.timestamp).toLocaleDateString()}
                </span>
              </div>
              <div>
                <ul className="rates-container">
                  <span>rates:</span>
                  {Object.keys(currency.rates).map(rateKey => (
                    <li key={rateKey}>
                      {rateKey}: {currency.rates[rateKey]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
