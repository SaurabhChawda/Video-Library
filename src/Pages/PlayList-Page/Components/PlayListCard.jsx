import "../../../components/Card/Card.css";
import "../../../components/Card/Card-Responsive.css";
import "./PlayListCard.css";
import { MdDelete } from "react-icons/md";
import { useTheme, useUser } from "../../../Contexts/Index";
import { useNavigate } from "react-router-dom";
export const PlayListCard = () => {
  const navigate = useNavigate();
  const { themeToggle } = useTheme();
  const {
    state: { playList },
    dispatch,
    RemoveFromWatchLater,
    AddToHistory,
    DeletePlaylist,
    DeleteVideoFromPlayList,
  } = useUser();
  return (
    <section className="playList">
      {playList.length === 0 ? (
        <div className="card-empty--container">
          <h1 className="card--empty">Your PlayList is Empty !</h1>
        </div>
      ) : (
        playList.map((value) => {
          return (
            <div key={value._id} className="playList--container">
              <div className="playList-header--Container">
                <h1 className="playlist__heading">{value.title}</h1>
                <MdDelete
                  size={25}
                  color={themeToggle === "light" ? "black" : "White"}
                  onClick={() => {
                    DeletePlaylist(value);
                  }}
                />
              </div>
              <section className="card playlist-Card">
                {value &&
                  value.videos.map((item) => {
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
                            <MdDelete
                              size={25}
                              color={themeToggle === "light" ? "black" : "White"}
                              onClick={() => {
                                DeleteVideoFromPlayList(value, item);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </section>
            </div>
          );
        })
      )}
    </section>
  );
};

{
  /* <div key={item._id} className="card--wrapper">
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
                  <MdDelete
                    size={25}
                    color={themeToggle === "light" ? "black" : "White"}
                    onClick={() => {
                      RemoveFromWatchLater(item);
                    }}
                  />
                </div>
              </div>
            </div> */
}
