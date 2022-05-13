import "./App.css";
import { Home, WatchLater, Video, LikedVideo, History, Login, SignUp, PlayList } from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Contexts/Index";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { themeToggle } = useTheme();
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="app" theme={themeToggle}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/video/:id" element={<Video />}></Route>
          <Route
            path="/playlist"
            element={
              <PrivateRoute>
                <PlayList />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/signUp/" element={<SignUp />}></Route>
          <Route path="/login/" element={<Login />}></Route>
          <Route
            path="/watchLater"
            element={
              <PrivateRoute>
                <WatchLater />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/likedvideos"
            element={
              <PrivateRoute>
                <LikedVideo />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
