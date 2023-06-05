import "./App.css";
import { Home, WatchLater, Video, LikedVideo, History, Login, SignUp, PlayList } from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Contexts/Index";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-S6P5RP9HFS')
  ReactGA.send({ hitType: "page_view", page: window.location.pathname});
  const { themeToggle } = useTheme();
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="app" theme={themeToggle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<Video />} />
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <PlayList />
              </PrivateRoute>
            }
          />
          <Route path="/signUp/" element={<SignUp />} />
          <Route path="/login/" element={<Login />} />
          <Route
            path="/watchLater"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          />
          <Route
            path="/likedvideos"
            element={
              <PrivateRoute>
                <LikedVideo />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
