import "./Home.css";
import "./Home-Responsive.css";
import { Nav, NavForTab, Sidebar, Card, Filter } from "../../components/Index";
export function Home() {
  return (
    <div className="page--Container">
      <Nav hideComponent={true} />
      <NavForTab />
      <Sidebar />
      <main className="main--container">
        <Filter />
        <Card />
      </main>
    </div>
  );
}
