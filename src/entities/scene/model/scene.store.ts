import { create, type StateCreator } from "zustand";
import type { ViewMode } from "./types";

interface Actions {
  toggleViewMode: () => void;
  toggleGridVisible: () => void;
};

interface InitialState {
  viewMode: ViewMode;
  gridVisible: boolean;
};

interface SceneState extends InitialState, Actions {};

const initialState: InitialState = {
  viewMode: "3d",
  gridVisible: true,
};

const sceneStore: StateCreator<SceneState> = (set) => ({
  ...initialState,
  toggleViewMode: () => set((state) => ({ viewMode: state.viewMode === "2d" ? "3d" : "2d"})),
  toggleGridVisible: () => set((state) => ({ gridVisible: !state.gridVisible })),
});

const useSceneStore = create<SceneState>()(sceneStore);

export const useViewMode = () => useSceneStore((state) => state.viewMode);
export const useGridVisible = () => useSceneStore((state) => state.gridVisible);

export const toggleViewMode = () => useSceneStore.getState().toggleViewMode();
export const toggleGridVisible = () => useSceneStore.getState().toggleGridVisible();
