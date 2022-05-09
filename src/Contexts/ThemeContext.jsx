import { createContext, useState, useContext } from "react";
const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState("light");
  localStorage.setItem("theme", JSON.stringify(themeToggle));
  return <ThemeContext.Provider value={{ themeToggle, setThemeToggle }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
