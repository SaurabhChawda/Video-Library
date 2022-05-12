import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav, NavForTab, Sidebar } from "../../components/Index";
import { HistoryCard } from "./Components/HistoryCard.jsx";
import { Header } from "./Components/Header";
export function History() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <NavForTab />
      <Sidebar />
      <main className="main--container">
        <Header />
        <HistoryCard />
      </main>
    </div>
  );
}
