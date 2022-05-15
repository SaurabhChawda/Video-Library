import "./playListModal.css";
import { useState } from "react";
import { useTheme, useUser } from "../../Contexts/Index";
import { FaTimes } from "react-icons/fa";
export const PlayListModal = ({ value }) => {
  const [playListTitle, setPlayListTitle] = useState("PlayList");
  const { openModal, setOpneModal, video } = value;
  const { themeToggle } = useTheme();
  const {
    state: { playList },
    CreatePlaylist,
    AddVideoToPlayList,
  } = useUser();
  return (
    <div className="overlay">
      <div className="playList-modal">
        <div className="playList-modal--header">
          <h2 className="playList-modal__heading">Save to..</h2>
          <FaTimes
            size={25}
            color={themeToggle === "light" ? "black" : "white"}
            onClick={() => setOpneModal(!openModal)}
          />
        </div>
        <hr />
        {playList.length !== 0 &&
          playList.map((item) => {
            return (
              <div key={item._id} className="playList-item--container">
                <input
                  className="playList__checkbox"
                  type="checkbox"
                  onChange={() => {
                    AddVideoToPlayList(item, video), setOpneModal(!openModal);
                  }}
                />
                <h3 className="playList__title">{item.title}</h3>
              </div>
            );
          })}
        <hr />
        <div className="playList-modal--new-PlayList">
          <input
            type="text"
            placeholder="create new playlist"
            className="playList-modal__input"
            onChange={(e) => setPlayListTitle(e.target.value)}
          />
          <button className="playList-modal__btn" onClick={() => CreatePlaylist(playListTitle)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
