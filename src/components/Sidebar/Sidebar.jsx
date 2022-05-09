import "./Sidebar.css";
import { MdPlaylistAdd, MdWatchLater, MdOutlineHome, MdOutlineHistoryToggleOff } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
export function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul className="sidebar__unordered-list">
          <li className="sidebar__list">
            {/* <img className="sidebar__icon" src="/assets/image/HomePage/Home.png" alt="Home" /> */}
            <MdOutlineHome size={30} color="white" />
            <h3 className="sidebar--content">Home</h3>
          </li>
          <li className="sidebar__list">
            {/* <img className="sidebar__icon" src="/assets/image/HomePage/Watch Later.png" alt="Watch Later" /> */}
            <MdWatchLater size={28} color="white" />
            <h3 className="sidebar--content">Watch Later</h3>
          </li>
          <li className="sidebar__list">
            {/* <img className="sidebar__icon" src="/assets/image/HomePage/Play List.png" alt="Play List" /> */}
            <MdPlaylistAdd size={30} color="white" />
            <h3 className="sidebar--content">PlayList</h3>
          </li>
          <li className="sidebar__list">
            {/* <img className="sidebar__icon" src="/assets/image/HomePage/Liked.png" alt="Liked" /> */}
            <AiFillLike size={30} color="white" />
            <h3 className="sidebar--content">Liked Videos</h3>
          </li>
          <li className="sidebar__list">
            {/* <img className="sidebar__icon" src="/assets/image/HomePage/History.png" alt="History" /> */}
            <MdOutlineHistoryToggleOff size={30} color="white" />
            <h3 className="sidebar--content">History</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
