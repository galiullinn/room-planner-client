import { AppRouter } from "./router/AppRouter";
import { Navbar } from "@/widgets/navbar";

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