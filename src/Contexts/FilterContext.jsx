import { createContext, useContext, useReducer} from "react";
import { Reducer } from "../Reducers/FilterReducer";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, { filteredData: [] });

  return <FilterContext.Provider value={{ state, dispatch }}>{children}</FilterContext.Provider>;
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
