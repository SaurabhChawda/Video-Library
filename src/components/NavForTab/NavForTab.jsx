import "./NavForTab.css";
import { MdPlaylistAdd, MdWatchLater, MdOutlineHome, MdOutlineHistoryToggleOff } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";
export const NavForTab = () => {
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
        <Link to="/">
          <MdOutlineHome size={30} color="white" />
        </Link>
        <Link to="/watchLater">
          <MdWatchLater size={28} color="white" />
        </Link>
        <Link to="/playlist">
          <MdPlaylistAdd size={30} color="white" />
        </Link>
        <Link to="/likedvideos">
          <AiFillLike size={30} color="white" />
        </Link>
        <Link to="/history">
          <MdOutlineHistoryToggleOff size={30} color="white" />
        </Link>
      </div>
    </div>
  );
};
