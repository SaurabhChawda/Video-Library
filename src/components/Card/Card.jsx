import "./Card.css";
import "./Card-Responsive.css";
import { useSearch } from "../../Contexts/SearchContext";
import { MdPlaylistAdd, MdOutlinePlaylistAddCheck, MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useState } from "react";
export const Card = () => {
  const { updatedData } = useSearch();
  const [playListIcon, setPlayListIcon] = useState(false);
  const [playListItem, setPlayListItem] = useState();
  const [watchLaterIcon, setWatchLaterIcon] = useState(false);
  const [watchLaterItem, setWatchLaterItem] = useState();

  return (
    <section className="card">
      {updatedData &&
        updatedData.map((item) => {
          return (
            <div className="card--wrapper">
              <div className="card--thumbnail">
                <img className="card__img--thumbnail" src={item.thumbnail} />
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
                  <div>
                    {playListIcon && playListItem === item._id ? (
                      <MdOutlinePlaylistAddCheck
                        size={30}
                        color="white"
                        onClick={() => {
                          setPlayListItem(item._id);
                          setPlayListIcon(!playListIcon);
                        }}
                      />
                    ) : (
                      <MdPlaylistAdd
                        size={30}
                        color="white"
                        onClick={() => {
                          setPlayListItem(item._id);
                          setPlayListIcon(!playListIcon);
                        }}
                      />
                    )}
                  </div>
                  <div>
                    {watchLaterIcon && watchLaterItem === item._id ? (
                      <MdWatchLater
                        size={25}
                        color="white"
                        onClick={() => {
                          setWatchLaterItem(item._id);
                          setWatchLaterIcon(!watchLaterIcon);
                        }}
                      />
                    ) : (
                      <MdOutlineWatchLater
                        size={25}
                        color="white"
                        onClick={() => {
                          setWatchLaterItem(item._id);
                          setWatchLaterIcon(!watchLaterIcon);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
// {
//   <div className="card__dropdown">
//     <img
//       className="card__img--content"
//       src="/assets/image/Video-Image/Three dot.png"
//       alt="Icon"
//       onClick={() => setIsOpen(!isOpen)}
//     />
//     <div className={isOpen ? "card__dropdown--content-show" : "card__dropdown--content-hide"}>
//       <a className="card__dropdown-box">
//         <img className="card__icon" src="/assets/image/HomePage/Watch Later.png" alt="Watch Later" />
//         <small>Watch Later</small>
//       </a>
//       <a className="card__dropdown-box">
//         <img className="card__icon" src="/assets/image/HomePage/Play List.png" alt="Play List" />
//         <small>Add to playList</small>
//       </a>
//     </div>
//   </div>
// }
