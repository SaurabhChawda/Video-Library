import "./searchbar.css";
import { useSearch, useFilter } from "../../Contexts/Index";

export const SearchBar = () => {
  const {
    state: { filteredData },
  } = useFilter();
  const { setUpdatedData, data } = useSearch();
  const searchHandler = (value) => {
    return filteredData.length !== 0
      ? setUpdatedData(filteredData.filter((item) => item.title.toLowerCase().match(value.toLowerCase())))
      : setUpdatedData(data.filter((item) => item.title.toLowerCase().match(value.toLowerCase())));
  };
  return (
    <div className="searchbar">
      <input
        className="nav__input--search"
        type="search"
        placeholder="Search"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};
