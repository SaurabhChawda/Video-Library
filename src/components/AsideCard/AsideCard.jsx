import "./AsideCard.css";
import { useNavigate } from "react-router-dom";
import { useUser, useData } from "../../Contexts/Index";
export function AsideCard() {
  const navigate = useNavigate();
  const { data } = useData();
  const {
    state: { currentVideo },
    dispatch,
    AddToHistory,
  } = useUser();
  return (
    <>
      {currentVideo.length !== 0 &&
        data
          .filter((item) => item.categoryName === currentVideo[0].categoryName)
          .map((item) => {
            return (
              <div key={item._id} className="aside-card--wrapper">
                <div className="aside-card--thumbnail">
                  <img
                    className="aside-card__img--thumbnail"
                    src={item.thumbnail}
                    onClick={() => {
                      dispatch({ type: "Add_to_CurrentVideo", payload: item });
                      AddToHistory(item);
                      navigate(`/video/${item._id}`);
                    }}
                  />
                  <small className="aside-card--time">{item.time}</small>
                </div>
                <div className="aside-card--content-container">
                  <div className="aside-card--content-Profile">
                    <img className="aside-card__img--content-Profile" src={item.ProfileImage} alt="Profile Image" />
                  </div>
                  <div className="aside-card--content-text">
                    <h3 className="aside-card--content-title">
                      {item.title.length > 35 ? item.title.substring(0, 32) + "..." : item.title}
                    </h3>
                    <small className="aside-card--content-channel">{item.channelName}</small>
                    <small className="aside-card--content-views">{item.views}</small>
                    <small className="aside-card--content-date">{item.date}</small>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}
