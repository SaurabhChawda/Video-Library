import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./Index";
const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const { authState } = useAuth();
  const [themeToggle, setThemeToggle] = useState("light");

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      localStorage.setItem("theme", JSON.stringify(themeToggle));
    }
  }, [themeToggle]);

  useEffect(() => {
    setThemeToggle(JSON.parse(localStorage.getItem("theme")));
  }, [authState]);

  return <ThemeContext.Provider value={{ themeToggle, setThemeToggle }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
