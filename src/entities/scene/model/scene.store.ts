import type { TransformMode, ViewMode } from "./types";
import { create, type StateCreator } from "zustand";

interface Actions {
  toggleViewMode: () => void;
  toggleGridVisible: () => void;
  setTransformMode: (mode: TransformMode) => void;
}

interface InitialState {
  viewMode: ViewMode;
  gridVisible: boolean;
  gridSize: number;
  transformMode: TransformMode;
}

interface SceneState extends InitialState, Actions {};

const initialState: InitialState = {
  viewMode: "3d",
  gridVisible: true,
  gridSize: 20,
  transformMode: "translate",
};

const sceneStore: StateCreator<SceneState> = (set) => ({
  ...initialState,
  toggleViewMode: () => set((state) => ({ viewMode: state.viewMode === "2d" ? "3d" : "2d"})),
  toggleGridVisible: () => set((state) => ({ gridVisible: !state.gridVisible })),
  setTransformMode: (mode) => set(() => ({ transformMode: mode })),
});

const useSceneStore = create<SceneState>()(sceneStore);

export const useViewMode = () => useSceneStore((state) => state.viewMode);
export const useGridVisible = () => useSceneStore((state) => state.gridVisible);
export const useGridSize = () => useSceneStore((state) => state.gridSize);
export const useTransformMode = () => useSceneStore((state) => state.transformMode);

export const toggleViewMode = () => useSceneStore.getState().toggleViewMode();
export const toggleGridVisible = () => useSceneStore.getState().toggleGridVisible();
export const setTransformMode = (mode: TransformMode) => useSceneStore.getState().setTransformMode(mode);