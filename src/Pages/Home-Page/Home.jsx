import "./Home.css";
import "./Home-Responsive.css";
import { Nav, NavForTab, Sidebar, Card } from "../../components/Index";
export function Home() {
  return (
    <div className="home-page">
      <Nav />
      <NavForTab />
      <Sidebar />
      <main className="home-page__main-container">
        <Card />
      </main>
    </div>
  );
}
