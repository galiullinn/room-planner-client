import { GuidePage } from "@/pages/guide-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { PlannerPage } from "@/pages/planner-page";
import { Suspense } from "react";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path={"/"} element={<PlannerPage />} />
        <Route path={"/guide"} element={<GuidePage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};