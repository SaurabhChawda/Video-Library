import "./searchbar.css";
import { useSearch } from "../../Contexts/SearchContext";
export const SearchBar = () => {
  const { setUpdatedData, data } = useSearch();
  const newdata = [...data];
  const searchHandler = (value) => {
    return setUpdatedData(newdata.filter((item) => item.title.toLowerCase().match(value.toLowerCase())));
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
