import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav,Sidebar, } from "../../components/Index";
import { PlayListCard } from "./Components/PlayListCard.jsx";
import { Header } from "./Components/Header.jsx";
export function PlayList() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <Sidebar />
      <main className="main--container">
        <Header />
        <PlayListCard />
      </main>
    </div>
  );
}
