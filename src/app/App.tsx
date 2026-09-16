import { Navbar } from "@/widgets/navbar";
import { AppRouter } from "./AppRouter";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};