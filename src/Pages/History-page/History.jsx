import "../Home-Page/Home.css";
import "../Home-Page/Home-Responsive.css";
import { Nav,Sidebar } from "../../components/Index";
import { HistoryCard } from "./Components/HistoryCard.jsx";
import { Header } from "./Components/Header";
export function History() {
  return (
    <div className="page--Container">
      <Nav hideComponent={false} />
      <Sidebar />
      <main className="main--container">
        <Header />
        <HistoryCard />
      </main>
    </div>
  );
}
