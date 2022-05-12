import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav, NavForTab, Sidebar } from "../../components/Index";
import { LikedVideoCard } from "./Components/LikedVideoCard.jsx";
export function LikedVideo() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <main className="main--container">
        <LikedVideoCard />
      </main>
    </div>
  );
}
