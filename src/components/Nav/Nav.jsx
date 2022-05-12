import "./nav.css";
import { Link } from "react-router-dom";
import { MdLogin, MdEmojiPeople, MdDarkMode, MdLightMode } from "react-icons/md";
import { SearchBar } from "../Index.js";
import { useTheme, useAuth } from "../../Contexts/Index";
import { useNavigate } from "react-router";
import { Modal } from "../Index";
import { useState } from "react";

export function Nav({ hideComponent }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { themeToggle, setThemeToggle } = useTheme();
  const {
    authState: { isUserLoggedIn },
    logoutCredentials,
  } = useAuth();
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
            {isUserLoggedIn ? (
              <MdEmojiPeople
                size={25}
                color={themeToggle === "light" ? "black" : "white"}
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <MdLogin
                size={25}
                color={themeToggle === "light" ? "black" : "white"}
                onClick={() => navigate("/login")}
              />
            )}
          </li>
          {hideComponent && (
            <li className="nav-bar__item">
              {themeToggle === "light" ? (
                <MdLightMode
                  size={25}
                  color={themeToggle === "light" ? "black" : "white"}
                  onClick={() => {
                    themeToggle === "light" ? setThemeToggle("dark") : setThemeToggle("light");
                  }}
                />
              ) : (
                <MdDarkMode
                  size={25}
                  color={themeToggle === "light" ? "black" : "white"}
                  onClick={() => {
                    themeToggle === "light" ? setThemeToggle("dark") : setThemeToggle("light");
                  }}
                />
              )}
            </li>
          )}
        </ul>
      </nav>
      {isOpen && <Modal value={{ isOpen, setIsOpen }} />}
    </div>
  );
}
