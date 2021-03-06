import "./Card.css";
import "./Card-Responsive.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayListModal } from "../../components/Index";
import { useTheme, useUser, useSearch } from "../../Contexts/Index";
import { MdPlaylistAdd,MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
export const Card = () => {
  const [openModal, setOpneModal] = useState(false);
  const [video, setVideo] = useState();
  const navigate = useNavigate();
  const { themeToggle } = useTheme();
  const { updatedData } = useSearch();
  const {
    state: { watchLater, playList },
    dispatch,
    AddToWatchLater,
    RemoveFromWatchLater,
    AddToHistory,
  } = useUser();
  return (
    <section className="card">
      {updatedData &&
        updatedData.map((item) => {
          return (
            <div key={item._id} className="card--wrapper">
              <div className="card--thumbnail">
                <img
                  className="card__img--thumbnail"
                  src={item.thumbnail}
                  onClick={() => {
                    dispatch({ type: "Add_to_CurrentVideo", payload: item });
                    AddToHistory(item);
                    navigate(`/video/${item._id}`);
                  }}
                />
                <small className="card--time">{item.time}</small>
              </div>
              <div className="card--content-container">
                <div className="card--content-Profile">
                  <img className="card__img--content-Profile" src={item.ProfileImage} alt="Profile Image" />
                </div>
                <div className="card--content-text">
                  <h3 className="card--content-title">
                    {item.title.length > 35 ? item.title.substring(0, 32) + "..." : item.title}
                  </h3>
                  <small className="card--content-channel">{item.channelName}</small>
                  <small className="card--content-views">{item.views}</small>
                  <small className="card--content-date">{item.date}</small>
                </div>
                <div className="card__icon--container">
                  <MdPlaylistAdd
                    size={25}
                    color={themeToggle === "light" ? "black" : "white"}
                    onClick={() => {
                      setVideo(item);
                      setOpneModal(!openModal);
                    }}
                  />
                  <div>
                    {watchLater.length !== 0 ? (
                      watchLater.some((value) => value._id === item._id) ? (
                        <MdWatchLater
                          size={25}
                          color={themeToggle === "light" ? "black" : "white"}
                          onClick={() => {
                            RemoveFromWatchLater(item);
                          }}
                        />
                      ) : (
                        <MdOutlineWatchLater
                          size={25}
                          color={themeToggle === "light" ? "black" : "white"}
                          onClick={() => AddToWatchLater(item)}
                        />
                      )
                    ) : (
                      <MdOutlineWatchLater
                        size={25}
                        color={themeToggle === "light" ? "black" : "white"}
                        onClick={() => {
                          AddToWatchLater(item);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {openModal && <PlayListModal value={{ openModal, setOpneModal, video }} />}
    </section>
  );
};