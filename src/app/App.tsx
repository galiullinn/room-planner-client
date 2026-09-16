import { Navbar } from "@/widgets/navbar";
import { AppRouter } from "./AppRouter";

export const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};