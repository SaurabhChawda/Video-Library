import "./NavForTab.css";
import { MdPlaylistAdd, MdWatchLater, MdOutlineHome, MdOutlineHistoryToggleOff } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
export const NavForTab = () => {
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
        <a>
          {/* <img className="nav-bar-tab--icon" src="/assets/image/HomePage/Home.png" alt="Home" /> */}
          <MdOutlineHome size={30} color="white" />
        </a>
        <a>
          {/* <img className="nav-bar-tab--icon" src="/assets/image/HomePage/Liked.png" alt="Liked" /> */}
          <MdWatchLater size={28} color="white" />
        </a>
        <a>
          {/* <img className="nav-bar-tab--icon" src="/assets/image/HomePage/Play List.png" alt="Play List" /> */}
          <MdPlaylistAdd size={30} color="white" />
        </a>
        <a>
          {/* <img className="nav-bar-tab--icon" src="/assets/image/HomePage/Watch Later.png" alt="Watch Later" /> */}
          <AiFillLike size={30} color="white" />
        </a>
        <a>
          {/* <img className="nav-bar-tab--icon" src="/assets/image/HomePage/history.png" alt="History" /> */}
          <MdOutlineHistoryToggleOff size={30} color="white" />
        </a>
      </div>
    </div>
  );
};
