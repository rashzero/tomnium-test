import React from "react";
import ReactDOM from "react-dom";

import CurrencyList from "./CurrencyList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CurrencyList />
  </React.StrictMode>,
  rootElement
);
