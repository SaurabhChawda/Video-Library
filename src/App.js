import "./App.css";
import { Home, WatchLater, Video, LikedVideo } from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Contexts/Index";
function App() {
  const { themeToggle } = useTheme();
  return (
    <div className="app" theme={themeToggle}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/watchLater" element={<WatchLater />}></Route>
        <Route path="/video/:id" element={<Video />}></Route>
        <Route path="/playlist" element={<WatchLater />}></Route>
        <Route path="/likedvideos" element={<LikedVideo />}></Route>
        <Route path="/history" element={<WatchLater />}></Route>
      </Routes>
    </div>
  );
}

export default App;
