import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataProvider, SearchProvider, ThemeProvider, FilterProvider, UserProvider } from "./Contexts/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <DataProvider>
          <FilterProvider>
            <SearchProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </SearchProvider>
          </FilterProvider>
        </DataProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
