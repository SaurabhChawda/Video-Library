import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("/api/videos");
        setdata(videos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);
export { useData, DataProvider };
