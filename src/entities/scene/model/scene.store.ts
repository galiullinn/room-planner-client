import { create, type StateCreator } from "zustand";
import type { TransformMode, ViewMode } from "./types";

interface Actions {
  toggleViewMode: () => void;
  toggleGridVisible: () => void;
  toggleSnapToGrid: () => void;
  setGridStep: (step: number) => void;
  setTransformMode: (mode: TransformMode) => void;
};

interface InitialState {
  viewMode: ViewMode;
  gridVisible: boolean;
  transformMode: TransformMode;
  snapToGrid: boolean;
  gridStep: number;
};

interface SceneState extends InitialState, Actions {};

const initialState: InitialState = {
  viewMode: "3d",
  gridVisible: true,
  transformMode: "translate",
  snapToGrid: false,
  gridStep: 0.5,
};

const sceneStore: StateCreator<SceneState> = (set) => ({
  ...initialState,
  toggleViewMode: () => set((state) => ({ viewMode: state.viewMode === "2d" ? "3d" : "2d"})),
  toggleGridVisible: () => set((state) => ({ gridVisible: !state.gridVisible })),
  toggleSnapToGrid: () => set((state) => ({ snapToGrid: !state.snapToGrid })),
  setGridStep: (step: number) => set(() => ({ gridStep: step })),
  setTransformMode: (mode: TransformMode) => set(() => ({ transformMode: mode})),
});

const useSceneStore = create<SceneState>()(sceneStore);

export const useViewMode = () => useSceneStore((state) => state.viewMode);
export const useGridVisible = () => useSceneStore((state) => state.gridVisible);
export const useTransformMode = () => useSceneStore((state) => state.transformMode);
export const useSnapToGrid = () => useSceneStore((state) => state.snapToGrid);
export const useGridStep = () => useSceneStore((state) => state.gridStep);

export const toggleViewMode = () => useSceneStore.getState().toggleViewMode();
export const toggleGridVisible = () => useSceneStore.getState().toggleGridVisible();
export const toggleSnapToGrid = () => useSceneStore.getState().toggleSnapToGrid();
export const setGridStep = (step: number) => useSceneStore.getState().setGridStep(step);
export const setTransformMode = (mode: TransformMode) => useSceneStore.getState().setTransformMode(mode);