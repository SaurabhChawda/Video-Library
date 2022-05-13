import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import "./Video.css";
import { Nav, NavForTab, Sidebar, Aside, AsideCard } from "../../components/Index";
import { VideoCard } from "./Components/VideoCard.jsx";
export function Video() {
  return (
    <div className="video-page">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <Aside />
      <main className="video-page__main-container">
        <VideoCard />
        <div className="Video-page__aside-bottom-container">
          <AsideCard />
        </div>
      </main>
    </div>
  );
}
