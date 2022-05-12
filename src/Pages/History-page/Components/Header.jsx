import "./Header.css";
import { useUser } from "../../../Contexts/Index";
export const Header = () => {
  const { RemoveAllVideoFromHistory } = useUser();
  return (
    <div className="history-header--container">
      <h1 className="history-header__heading">History</h1>
      <button className="history-header__btn" onClick={() => RemoveAllVideoFromHistory()}>
        Clear All
      </button>
    </div>
  );
};
