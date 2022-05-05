import "./nav.css";
import { MdLogin, MdDarkMode } from "react-icons/md";
import { SearchBar } from "../Index.js";
export function Nav() {
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <a>
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
          </a>
        </nav>
        <SearchBar />
        <ul className="nav-bar__list">
          <li className="nav-bar__item">
            {/* <img className="nav-bar__img--login" src="/assets/image/HomePage/Login.png" alt="Login" /> */}
            <MdLogin size={30} color="white" />
          </li>
          <li className="nav-bar__item">
            {/* <img className="nav-bar__toggle" src="/assets/image/HomePage/DarkMode.png"></img> */}
            <MdDarkMode size={30} color="white" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
