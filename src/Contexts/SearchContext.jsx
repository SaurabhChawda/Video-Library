import { createContext, useEffect, useState, useContext } from "react";
import { useData } from "./DataContext";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const { data } = useData();
  const [updatedData, setUpdatedData] = useState();

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  return (
    <SearchContext.Provider value={{ updatedData, setUpdatedData, data }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);
export { useSearch, SearchProvider };
