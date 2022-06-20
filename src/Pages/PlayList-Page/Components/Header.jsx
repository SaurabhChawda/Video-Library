import "./Header.css";
import { useState } from "react";
import { CreatePlayListModal } from "../Components/CreatePlayListModal.jsx";
export const Header = () => {
  const [openModal, setOpneModal] = useState(false);
  return (
    <div className="header--container">
      <h1 className="header__heading">PlayLists</h1>
      <button className="header__btn--CreateNewPlayList" onClick={() => setOpneModal(!openModal)}>
        Create PlayLists
      </button>
      {openModal && <CreatePlayListModal value={{ openModal, setOpneModal }} />}
    </div>
  );
};
