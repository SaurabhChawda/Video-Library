import "./playListModal.css";
import { useState } from "react";
import { useTheme, useUser } from "../../Contexts/Index";
import { FaTimes } from "react-icons/fa";
export const PlayListModal = ({ value }) => {
  const [playListTitle, setPlayListTitle] = useState("PlayList");
  const { dispatch } = useUser();
  const { openModal, setOpneModal } = value;
  const { themeToggle } = useTheme();
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal--header">
          <h2 className="modal__heading">Save to..</h2>
          <FaTimes
            size={25}
            color={themeToggle === "light" ? "black" : "white"}
            onClick={() => setOpneModal(!openModal)}
          />
        </div>
        <hr />
        <div className="modal--new-PlayList">
          <input
            type="text"
            placeholder="create new playlist"
            className="modal__input"
            onChange={(value) => setPlayListTitle(value)}
          />
          <button className="modal__btn" onClick={() => dispatch({ type: "Create_PlayList", payload: playListTitle })}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
