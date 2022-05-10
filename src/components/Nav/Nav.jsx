import "./nav.css";
import { Link } from "react-router-dom";
import { MdLogin, MdDarkMode, MdLightMode } from "react-icons/md";
import { SearchBar } from "../Index.js";
import { useTheme } from "../../Contexts/Index";
export function Nav({ hideComponent }) {
  const { themeToggle, setThemeToggle } = useTheme();
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <Link to="/">
            <img
              className="nav-bar__img--logo nav-bar__img--desktop-logo"
              src="/assets/image/HomePage/Discover-Logo.png"
              alt="Discover"
            />
            <img
              className="nav-bar__img--logo nav-bar__img--mobile-logo"
              src="/assets/image/HomePage/Discover-Mobile-Logo.png"
              alt="Discover"
            />
          </Link>
        </nav>
        {hideComponent && <SearchBar />}
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            <MdLogin size={25} color={themeToggle === "light" ? "white" : "black"} />
          </li>
          {hideComponent && (
            <li className="nav-bar__item">
              {themeToggle === "light" ? (
                <MdLightMode
                  size={25}
                  color={themeToggle === "light" ? "white" : "black"}
                  onClick={() => {
                    themeToggle === "light" ? setThemeToggle("dark") : setThemeToggle("light");
                  }}
                />
              ) : (
                <MdDarkMode
                  size={25}
                  color={themeToggle === "light" ? "white" : "black"}
                  onClick={() => {
                    themeToggle === "light" ? setThemeToggle("dark") : setThemeToggle("light");
                  }}
                />
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
