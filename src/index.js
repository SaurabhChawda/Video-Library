import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  DataProvider,
  SearchProvider,
  ThemeProvider,
  FilterProvider,
  UserProvider,
  AuthProvider,
} from "./Contexts/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <AuthProvider>
          <ThemeProvider>
            <FilterProvider>
              <SearchProvider>
                <UserProvider>
                  <App />
                </UserProvider>
              </SearchProvider>
            </FilterProvider>
          </ThemeProvider>
        </AuthProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);