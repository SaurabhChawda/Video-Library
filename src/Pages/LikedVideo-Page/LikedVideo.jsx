import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav,Sidebar } from "../../components/Index";
import { LikedVideoCard } from "./Components/LikedVideoCard.jsx";
import { Header } from "./Components/Header.jsx";
export function LikedVideo() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <Sidebar />
      <main className="main--container">
        <Header />
        <LikedVideoCard />
      </main>
    </div>
  );
}
