import { Suspense } from "react";
import { useRoutes } from "react-router";
import { routes } from "./routes";

export const AppRouter = () => {
  const element = useRoutes(routes);
  return <Suspense fallback={<div>Загрузка...</div>}>{ element }</Suspense>;
};