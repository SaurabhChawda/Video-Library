import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav,Sidebar } from "../../components/Index";
import { WatchLaterCard } from "./Components/WatchLaterCard.jsx";
import { Header } from "./Components/Header.jsx";

export function WatchLater() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <Sidebar />
      <main className="main--container">
        <Header />
        <WatchLaterCard />
      </main>
    </div>
  );
}
