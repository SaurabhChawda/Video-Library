import "../../../components/Card/Card.css";
import "../../../components/Card/Card-Responsive.css";
import { MdDelete } from "react-icons/md";
import { useTheme, useUser } from "../../../Contexts/Index";
export const WatchLaterCard = () => {
  const { themeToggle } = useTheme();
  const {
    state: { watchLater },
    dispatch,
  } = useUser();
  return (
    <section className="card">
      {watchLater &&
        watchLater.map((item) => {
          return (
            <div key={item._id} className="card--wrapper">
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
                  <MdDelete
                    size={25}
                    color={themeToggle === "light" ? "White" : "black"}
                    onClick={() => {
                      dispatch({ type: "Remove_From_WatchLater", payload: item });
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
