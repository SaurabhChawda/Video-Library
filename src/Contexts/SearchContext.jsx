import { createContext, useEffect, useState, useContext } from "react";
import { useData, useFilter } from "./Index";
const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const { data } = useData();
  const {
    state: { filteredData },
  } = useFilter();

  const [updatedData, setUpdatedData] = useState();

  useEffect(() => {
    filteredData.length !== 0 ? setUpdatedData(filteredData) : setUpdatedData(data);
  }, [filteredData, data]);

  return <SearchContext.Provider value={{ updatedData, setUpdatedData, data }}>{children}</SearchContext.Provider>;
};

const useSearch = () => useContext(SearchContext);
export { useSearch, SearchProvider };
