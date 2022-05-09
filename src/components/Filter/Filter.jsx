import "./Filter.css";
import { useFilter, useData } from "../../Contexts/Index";
import { useEffect, useState } from "react";
export const Filter = () => {
  const [filterableData, setFilterableData] = useState();
  const { data } = useData();
  const { dispatch } = useFilter();

  useEffect(() => {
    setFilterableData(data);
  }, [data]);

  return (
    <div className="filter--container">
      <ul className="filter__unordered-List">
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "All", payload: filterableData })}>
            All
          </button>
        </li>
        <li className="filter__list-item">
          <button
            className="filter__btn"
            onClick={() => dispatch({ type: "Current_Affairs", payload: filterableData })}
          >
            Current Affairs
          </button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "Education", payload: filterableData })}>
            Education
          </button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "Solutions", payload: filterableData })}>
            Solutions
          </button>
        </li>
        <li className="filter__list-item">
          <button className="filter__btn" onClick={() => dispatch({ type: "Interview", payload: filterableData })}>
            Interview
          </button>
        </li>
      </ul>
    </div>
  );
};
