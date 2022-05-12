import "./Sidebar.css";
import { MdPlaylistAdd, MdWatchLater, MdOutlineHome, MdOutlineHistoryToggleOff } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Contexts/ThemeContext";
export function Sidebar() {
  const { themeToggle } = useTheme();
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar__list--container">
          <NavLink to="/" className="sidebar__list">
            <span>
              <MdOutlineHome size={30} color={themeToggle === "light" ? "black" : "white"} />
            </span>
            <h3 className="sidebar--content">Home</h3>
          </NavLink>
          <NavLink to="/watchLater" className="sidebar__list">
            <MdWatchLater size={30} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">Watch Later</h3>
          </NavLink>
          <NavLink to="/playlist" className="sidebar__list">
            <MdPlaylistAdd size={30} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">PlayList</h3>
          </NavLink>
          <NavLink to="/likedvideos" className="sidebar__list">
            <AiFillLike size={30} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">Liked Videos</h3>
          </NavLink>
          <NavLink to="/history" className="sidebar__list">
            <MdOutlineHistoryToggleOff size={30} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">History</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
