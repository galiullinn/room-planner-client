import { create, type StateCreator } from "zustand";
import type { SceneObject } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

interface Actions {
  addObject: (obj: SceneObject) => void;
  removeObject: (id: string) => void;
  selectObject: (id: string | null) => void;
};

interface InitialState {
  objects: SceneObject[];
  selectedId: string | null;
};

interface ObjectState extends InitialState, Actions {};

const initialState: InitialState = {
  objects: [
    {
      id: "test-box",
      name: "box1",
      type: "primitive",
      shape: "box",
      color: "#ffffff",
      visible: true,
      locked: false,
      transform: {
        position: [-2, 0.5, 0],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
    },
  ],
  selectedId: null,
};

const objectStore: StateCreator<ObjectState> = (set) => ({
  ...initialState,
  addObject: (obj: SceneObject) => set((state) => ({ objects: [...state.objects, obj] })),
  removeObject: (id: string) => set((state) => ({
    objects: state.objects.filter((obj) => obj.id !== id),
    selectedId: state.selectedId === id ? null : state.selectedId,
  })),
  selectObject: (id: string | null) => set(() => ({ selectedId: id })),
});

const useObjectStore = create<ObjectState>()(
  persist(objectStore, {
    name: "objects-store",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({ objects: state.objects }),
  })
);

export const useObjects = () => useObjectStore((state) => state.objects);
export const useSelectedId = () => useObjectStore((state) => state.selectedId);

export const addObject = (obj: SceneObject) => useObjectStore.getState().addObject(obj);
export const removeObject = (id: string) => useObjectStore.getState().removeObject(id);
export const selectObject = (id: string | null) => useObjectStore.getState().selectObject(id);