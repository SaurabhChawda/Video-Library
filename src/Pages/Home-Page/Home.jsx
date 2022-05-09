import "./Home.css";
import "./Home-Responsive.css";
import { Nav, NavForTab, Sidebar, Card, Filter } from "../../components/Index";
export function Home() {
  return (
    <div className="home-page">
      <Nav hideComponent={true} />
      <NavForTab />
      <Sidebar />
      <main className="home-page__main-container">
        <Filter />
        <Card />
      </main>
    </div>
  );
}
