import { GuidePage } from "@/pages/guide-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { PlannerPage } from "@/pages/planner-page";
import { ROUTES } from "@/shared/config/routers";
import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  { path: ROUTES.planner, element: <PlannerPage /> },
  { path: ROUTES.guide, element: <GuidePage /> },
  { path: "*", element: <NotFoundPage /> },
];