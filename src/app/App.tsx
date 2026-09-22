import { Link } from "react-router";
import { AppRouter } from "./AppRouter";

export const App = () => {
  return (
    <div className="app">
      <Link to={"/"}>Planner</Link>
      <Link to={"/guide"}>Guide</Link>
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};