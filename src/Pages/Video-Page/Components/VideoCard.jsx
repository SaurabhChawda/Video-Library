import "./VideoCard.css";
import "./VideoCard-Responsive.css";
import { useState } from "react";
import { useTheme, useUser } from "../../../Contexts/Index";
import { MdPlaylistAdd, MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { PlayListModal } from "../../../components/Index";
export const VideoCard = () => {
  const [video, setVideo] = useState();
  const [openModal, setOpneModal] = useState(false);
  const { themeToggle } = useTheme();
  const {
    state: { watchLater, currentVideo, likedVideo },
    dispatch,
    RemoveFromLikedVideo,
    AddToLikedVideo,
  } = useUser();
  return (
    <section className="videoCard">
      {currentVideo.length !== 0 &&
        currentVideo.map((item) => {
          return (
            <div key={item._id} className="videoCard--wrapper">
              <div className="video-container">
                <iframe
                  className="video"
                  src={`https://www.youtube.com/embed/${item._id}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen"
                ></iframe>
              </div>
              <div className="videoCard--content-container">
                <div className="videoCard--content-Profile">
                  <img className="videoCard__img--content-Profile" src={item.ProfileImage} alt="Profile Image" />
                </div>
                <div className="videoCard--content-text">
                  <h3 className="videoCard--content-title">
                    {item.title.length > 60 ? item.title.substring(0, 32) + "..." : item.title}
                  </h3>
                  <small className="videoCard--content-channel">{item.channelName}</small>
                  <div className="videoCard__icon--container">
                    <div>
                      <small className="videoCard--content-views">{item.views}</small>
                      <small className="videoCard--content-date">{item.date}</small>
                    </div>
                    <div className="videoCard__icon">
                      <div>
                        {likedVideo.length !== 0 ? (
                          likedVideo.some((value) => value._id === item._id) ? (
                            <AiTwotoneLike
                              size={25}
                              color={themeToggle === "light" ? "black" : "white"}
                              onClick={() => {
                                RemoveFromLikedVideo(item);
                              }}
                            />
                          ) : (
                            <AiOutlineLike
                              size={25}
                              color={themeToggle === "light" ? "black" : "white"}
                              onClick={() => {
                                AddToLikedVideo(item);
                              }}
                            />
                          )
                        ) : (
                          <AiOutlineLike
                            size={25}
                            color={themeToggle === "light" ? "black" : "white"}
                            onClick={() => {
                              AddToLikedVideo(item);
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <MdPlaylistAdd
                          size={25}
                          color={themeToggle === "light" ? "black" : "white"}
                          onClick={() => {
                            setVideo(item);
                            setOpneModal(!openModal);
                          }}
                        />
                      </div>
                      <div>
                        {watchLater.length !== 0 ? (
                          watchLater.some((value) => value._id === item._id) ? (
                            <MdWatchLater
                              size={25}
                              color={themeToggle === "light" ? "black" : "white"}
                              onClick={() => {
                                dispatch({ type: "Remove_From_WatchLater", payload: item });
                              }}
                            />
                          ) : (
                            <MdOutlineWatchLater
                              size={25}
                              color={themeToggle === "light" ? "black" : "white"}
                              onClick={() => {
                                dispatch({ type: "Add_to_WatchLater", payload: item });
                              }}
                            />
                          )
                        ) : (
                          <MdOutlineWatchLater
                            size={25}
                            color={themeToggle === "light" ? "black" : "white"}
                            onClick={() => {
                              dispatch({ type: "Add_to_WatchLater", payload: item });
                            }}
                          />
                        )}
                      </div>
                    </div>
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
