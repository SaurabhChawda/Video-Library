import "./Home.css";
import "./Home-Responsive.css";
import { Nav,Sidebar, Card, Filter } from "../../components/Index";
export function Home() {
  return (
    <div className="page--Container">
      <Nav hideComponent={true} />
      <Sidebar />
      <main className="main--container">
        <Filter />
        <Card />
      </main>
    </div>
  );
}
