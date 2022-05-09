import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { DataProvider, SearchProvider } from "./Contexts/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
