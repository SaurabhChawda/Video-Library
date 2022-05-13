import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav, NavForTab, Sidebar } from "../../components/Index";
import { WatchLaterCard } from "./Components/WatchLaterCard.jsx";
import { Header } from "./Components/Header.jsx";

export function WatchLater() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <main className="main--container">
        <Header />
        <WatchLaterCard />
      </main>
    </div>
  );
}
